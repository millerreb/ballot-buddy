const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const buddyRouter = require('./routes/buddyRouter');
const userRouter = require('./routes/userRouter');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();

const passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

const app = express();

// Static files
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

// Cookie Parser
app.use(cookieParser());

// Body-Parser for...reasons?
app.use(bodyParser.urlencoded({extended: false}));

// Parses incoming JSON bodies
app.use(bodyParser.json());

// Connect to DB
let url = 'mongodb+srv://travisAdmin:'
url += process.env.MONGODB_PASSWORD;
url += '@ballot-buddy.xsilm.mongodb.net/User-Data?retryWrites=true&w=majority'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Passport
passport.use(new FacebookStrategy({
    clientID: "318062672725904",
    clientSecret: "5e1444328b7e4395631af4f6d43846f7",
    callbackURL: "/auth/facebook/complete",
    profileFields: ['id', 'displayName', 'emails']
  },
  function(accessToken, refreshToken, profile, done) {
    userModel.findOne({
      "facebookId": profile.id
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new userModel({
          "name": profile._json.name,
          "email": profile._json.email,
          "facebookId": profile._json.id
        });
        user.save(function(err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    })
  }
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  userModel.findById(id, function(err, user) {
    done(err, use);
  })
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }))
app.get('/auth/facebook/complete', (req, res) => {
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/random' })(req, res, next)});

// Main App
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

// Handles requests for election info
app.use('/api', buddyRouter);

// Handles user requests (login, logout, saveballot, retrieveballot)
app.use('/user', userRouter);

// 404 Handler
app.use((req,res) => {
  res.sendStatus(404);
});

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('your voting friend: listening on 3000');
})

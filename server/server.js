const path = require('path');
const express = require('express');
const buddyRouter = require('./routes/buddyRouter');
require('dotenv').config();

const app = express();

// Parses incoming JSON bodies
app.use(express.json());

// Static files
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

// Main App
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

// Handles requests for election info
app.use('/api', buddyRouter);

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

const userController = {};
const userModel = require('../models/user');

userController.findUser = (req, res, next) => {
  userModel.findOne(req.body, function(err, doc) {
    if (err) {
        return next({
        log: `An error occured in userController.findUser: ${err}`,
        message: { err: `An error occurred` },
      })
    }
    if (!doc) res.redirect('/createuser');
    res.locals.userDoc = doc;
    next();
  });
}

userController.createUser = (req, res, next) => {
  const user = new userModel(req.body);

  user.save(function(err) {
    if (err) {
        return next({
        log: `An error occured in userController.createUser: ${err}`,
        message: { err: `An error occurred` },
      })
    }
    res.locals.newUser = user;
    next();
  });
}

module.exports = userController;

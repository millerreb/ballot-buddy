const userController = {};
const userModel = require('../models/user');

// Finds our user and stores their info on res.locals.userDoc
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

module.exports = userController;

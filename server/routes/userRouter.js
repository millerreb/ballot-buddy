const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.findUser, (req, res) => {
  res.status(200).json(res.locals.userDoc);
});

router.post('/createuser', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

module.exports = router;

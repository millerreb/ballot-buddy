const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// For finding user and returning their full information
router.post('/', userController.findUser, (req, res) => {
  res.status(200).json(res.locals.userDoc);
});

module.exports = router;

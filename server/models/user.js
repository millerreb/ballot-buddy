const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  facebookId: {
    type: Number,
    required: true
  },
  savedBallots: [{
    electionName: String,
    candidates: {},
    referenda: {}
  }]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

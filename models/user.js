// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userType: String,
  userID: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

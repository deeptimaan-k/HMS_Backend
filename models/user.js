const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userType: String,
  userID: String,
  password: String,
  patientName: String,
  mobile: String,
  email: String,
  age: Number,
  department: String,
  gender: String,
  bloodGroup: String,
  DOB: String,
  address: String,
  image: String,
  disease: String,
  details: String,
  admitted: Boolean,
  date: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

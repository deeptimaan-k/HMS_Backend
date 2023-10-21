const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userType: String, // "Hospital," "Patient," "Insurance," etc.
  userID: String, // You can use a different data type as needed
  password: String, // Store hashed passwords
});

module.exports = mongoose.model('User', userSchema);

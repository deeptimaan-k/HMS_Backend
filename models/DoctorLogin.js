const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  userType: {
    type: String,
    default: "doctor",
  },
  docID: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('DoctorLogin', BookSchema);
// models/User.js
const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  userType: {
    type: String,
    required:true,
  },
  userID: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
  },
  mobile: {
    type: Number,
    minlength: 10,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
   required: true,
  },
  age: {
    type: Number,
  },
  department: {
    type: String,
  },
  gender: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  DOB: {
    type: String,
  },

  address: {
    type: String,
  },

  image: {
    type: String,
  },

  disease: {
    type: String,
  },

  details: {
    type: String,
  },
  admitted: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
  },
  docID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  }
});
const PatientModel = mongoose.model("patient", patientSchema);
module.exports = { PatientModel };
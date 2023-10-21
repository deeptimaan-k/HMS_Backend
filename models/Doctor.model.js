const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
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

const DoctorModel = mongoose.model("doctor", doctorSchema);
module.exports = { DoctorModel };

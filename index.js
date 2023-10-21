require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const doctor = require("./models/Doctor.model");

const app = express()
const PORT = process.env.PORT || 3000

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
app.get('/', (req,res) => {
    res.send({ title: 'Doctor' });
})

app.get('/doctorLogin', async (req,res)=> {

  const doctor = await doctor.find();
  if (doctor) {
    res.json(doctor)
  } else {
    res.send("Something went wrong.");
  }
  
});

app.get('/add-doctor', async (req,res) => {
  try {
    await doctor.insertMany([
      {
      userType: "Hospital",
      docID: "4452",
      password: "password123",
    },
    {
      userType: "Hospital",
      docID: "2522",
      password: "123",
    }
    ]);
    res.json({"Data":"Added"})
  } catch (error) {
    console.log("err", + error);
  }
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
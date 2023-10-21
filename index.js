require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor.model');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strict', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.get('/', (req, res) => {
  res.json({ title: 'Doctor' });
});

app.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/add-doctor', async (req, res) => {
  try {
    const result = await Doctor.insertMany([
      {
        userType: 'Hospital',
        docID: '4452',
        password: 'password123',
      },
      {
        userType: 'Hospital',
        docID: '2522',
        password: '123',
      }
    ]);
    res.json({ message: 'Data Added', result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Listening for requests');
  });
});

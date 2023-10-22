const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Replace with your MongoDB URI

app.use(cors());
app.use(express.json()); 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

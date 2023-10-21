const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRoute = require('./routes/login'); // Import the login route

// Load environment variables from a .env file
require('dotenv').config();

// Set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Database connection error:', err);
});

db.once('open', () => {
  console.log('Connected to the database');
});

// Use the login route with a base URL
app.use('/doctorlogins', loginRoute); // Mount the login route under the '/api' base URL

// Add other routes as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

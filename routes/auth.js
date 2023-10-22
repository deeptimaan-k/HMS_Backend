// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST route for user registration
router.post('/register', async (req, res) => {
  try {
    const { userType, userID, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ userType, userID });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ userType, userID, password });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST route for user login
router.post('/login', async (req, res) => {
  try {
    const { userType, userID, password } = req.body;
    // Check if the user exists in the database
    const user = await User.findOne({ userType, userID, password });
    if (user) {
      // User is authenticated
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // User login failed
      res.status(401).json({ success: false, message: 'Login failed' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Error during login' });
  }
});
module.exports = router;
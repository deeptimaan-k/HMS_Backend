const express = require('express');
const router = express.Router();
const DoctorLogin = require('../models/DoctorLogin');

// Route for user login
router.post('/login', async (req, res) => {
  const { userType, docID, password } = req.body;

  try {
    // Check if a user with the provided docID and password exists
    const user = await DoctorLogin.findOne({ userType, docID, password });

    if (user) {
      // User authentication successful, return a success response
      res.json({ success: true, userID: user._id });
    } else {
      // User authentication failed, return an error response
      res.status(401).json({ success: false, message: 'Authentication failed' });
    }
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

module.exports = router;

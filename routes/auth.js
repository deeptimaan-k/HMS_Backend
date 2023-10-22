// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", async (req, res) => {
  const { userType, userID, password } = req.body;

  try {
    const user = await User.findOne({ userType, userID, password });

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, error: "Login error" });
  }
});
module.exports = router;

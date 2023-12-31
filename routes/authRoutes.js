// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

// Register user
router.post('/register', authController.registerUser);

// Login user
router.post('/login', authController.loginUser);

// Protected route
router.get('/protected', authenticateToken, (req, res) => {
  // Access req.user.userId to get the user ID
  res.json({ message: 'This is a protected route', userId: req.user.userId });
});

module.exports = router;

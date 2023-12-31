// controllers/authController.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    
    res.json({ newUser, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ user, message: 'Login successful',token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

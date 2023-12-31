const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://myadmin:mypassword@smeapi.bzcafad.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/auth', authRoutes); // Use /auth as the base path for authentication routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

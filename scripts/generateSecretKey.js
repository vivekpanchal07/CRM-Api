// scripts/generateSecretKey.js
const crypto = require('crypto');

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString('hex');
  console.log('Your secret key:', secretKey);
};

generateSecretKey();

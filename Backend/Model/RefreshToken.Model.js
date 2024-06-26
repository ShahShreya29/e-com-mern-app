// refreshToken.model.js

const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  token: { type: String, required: true },
//   expirationDate: { type: Date, required: true },
});

module.exports = mongoose.model('RefreshToken', refreshTokenSchema);

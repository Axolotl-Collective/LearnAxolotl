const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 60, default: Date.now } // session expires after 60 minutes
});

module.exports = mongoose.model('Session', sessionSchema);

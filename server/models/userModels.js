const mongoose = require('mongoose');
const { Schema } = mongoose;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, require: true }
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err)
      return next({
        log: `ERROR: Error occurred in bcrypt hashing. ${err}`
      });
    this.password = hash;
    return next();
  });
});

const User = mongoose.model('user', userSchema);

module.exports = User;

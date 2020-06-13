const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Password hash before save
UserSchema.pre('save', async function save(next) {
  try {
    this.password = await bcrypt.hash(this.password, 8);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Validating password passed
UserSchema.methods.validatePassword = function validatePassowrd(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);

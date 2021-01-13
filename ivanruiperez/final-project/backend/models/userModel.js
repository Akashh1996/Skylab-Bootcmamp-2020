const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstname: String,
  id: String,
  secondname: String,
  password: String,
  email: String,
  phonenumber: Number,
  address: String,
  birthdate: String,
  photo: String,
  bond: {
    active: Boolean,
    type: String,
    endata: String,
  },
  admin: Boolean,
  superadmin: Boolean,
  barber: Boolean,
  salon: Boolean,
});

module.exports = model('users', userSchema);

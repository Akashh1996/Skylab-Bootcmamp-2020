const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const serviceSchema = new Schema({
  name: String,
  time: Number,
  price: Number,
  description: String,
  image: String,
  imageW: String,
});

module.exports = model('services', serviceSchema);

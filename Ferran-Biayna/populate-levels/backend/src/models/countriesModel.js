const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  code: { type: String },
  name: { type: String },
});

module.exports = model('countries', cartSchema);

const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const countrySchema = new Schema({
  code: String,
  name: String,
});

module.exports = model('Country', countrySchema);

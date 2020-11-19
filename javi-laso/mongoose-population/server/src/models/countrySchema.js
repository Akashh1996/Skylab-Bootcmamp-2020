const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
  code: String,
  name: String,
});

module.exports = model('User', countrySchema);

const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
  code: { type: String },
  countryName: { type: String },
});

module.exports = model('country', countrySchema);

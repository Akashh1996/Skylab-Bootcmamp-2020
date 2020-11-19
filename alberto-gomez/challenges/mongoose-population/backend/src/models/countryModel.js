const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
  code: { type: String },
  name: { type: String },
});

module.exports = model('countries', countrySchema);

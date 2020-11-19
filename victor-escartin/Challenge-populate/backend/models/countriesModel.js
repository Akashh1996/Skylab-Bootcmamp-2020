const { Schema, model } = require('mongoose');

const countriesSchema = new Schema({
  code: { type: String },
  name: { type: String },
});

module.exports = model('countries', countriesSchema);
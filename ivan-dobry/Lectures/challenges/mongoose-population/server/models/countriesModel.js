const { Schema, model } = require('mongoose');

const countriesSchema = new Schema({
  name: { type: String },
  code: { type: Number },
});

module.exports = model('countries', countriesSchema);

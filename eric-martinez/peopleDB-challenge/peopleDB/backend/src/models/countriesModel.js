const { Schema, model } = require('mongoose');

const countriesSchema = new Schema({
  code: { type: Number },
  name: { type: String },
});
module.exports = model('countries', countriesSchema);

const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
  code: { type: String },
  name: { type: String },
});

model.exports = model('Country', countrySchema);

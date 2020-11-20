const { Schema, model } = require('mongoose');

const infoSchema = new Schema({
  type: { type: String },
  sex: { type: String },
  'in-stock': { type: String },
});

module.exports = model('infoproducts', infoSchema);

const { Schema, model } = require('mongoose');

const inputsSchema = new Schema({
  text: { type: String },
});

module.exports = model('inputs', inputsSchema);

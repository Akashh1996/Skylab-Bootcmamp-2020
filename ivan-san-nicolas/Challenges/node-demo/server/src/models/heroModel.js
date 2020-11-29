const { Schema, model } = require('mongoose');

const heroSchema = new Schema({
  name: { type: String },
  power: { type: String },
});

module.exports = model('heroes', heroSchema);

const { Schema, model } = require('mongoose');

const heroSchema = new Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = model('Heroes', heroSchema);

const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const heroSchema = new Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = model('Heroes', heroSchema);

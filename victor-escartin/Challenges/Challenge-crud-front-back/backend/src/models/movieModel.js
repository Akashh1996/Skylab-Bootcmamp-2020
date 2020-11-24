const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const movieSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  year: { type: Number },
  income: { type: String },
});

module.exports = model('Movies', movieSchema);

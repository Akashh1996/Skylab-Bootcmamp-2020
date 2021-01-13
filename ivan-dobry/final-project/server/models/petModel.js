const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const petShema = new Schema({
  id: { type: Number },
  type: { type: String },
  name: { type: String },
  age: { type: String },
  description: { type: String },
  photo: [String],
});

module.exports = model('pets', petShema);

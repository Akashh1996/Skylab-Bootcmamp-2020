const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoListSchema = new Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = model('todolists', todoListSchema);

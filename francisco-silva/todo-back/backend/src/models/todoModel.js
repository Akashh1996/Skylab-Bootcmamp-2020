const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = model('Todo', todoSchema);

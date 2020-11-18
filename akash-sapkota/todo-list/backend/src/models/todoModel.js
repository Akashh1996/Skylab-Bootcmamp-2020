const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  name: { type: String },
});

module.exports = model('todos', todoSchema);

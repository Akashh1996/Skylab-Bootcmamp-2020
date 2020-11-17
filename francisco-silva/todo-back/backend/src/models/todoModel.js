const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  item: { type: String },
});

module.exports = model('Todo', todoSchema);

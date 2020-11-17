const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  description: { type: String },
});

module.exports = model('lists', todoSchema);

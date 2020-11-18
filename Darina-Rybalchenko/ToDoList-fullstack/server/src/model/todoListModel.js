const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoListSchema = new Schema({
  name: { type: String },
});

module.exports = model('todolists', todoListSchema);

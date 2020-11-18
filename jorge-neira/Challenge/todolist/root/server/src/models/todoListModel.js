const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartShema = new Schema({
  todoId: { type: Number },
  todoDescription: { type: String },
});

module.exports = model('todos', cartShema);

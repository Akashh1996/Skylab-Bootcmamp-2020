const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema({
  todoListItem: { type: String },
});

module.exports = model('Todolistitems', productSchema);

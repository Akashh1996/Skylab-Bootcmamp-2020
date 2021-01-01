const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const listSchema = new Schema({
  item: { type: String },
});

module.exports = model('items', listSchema);

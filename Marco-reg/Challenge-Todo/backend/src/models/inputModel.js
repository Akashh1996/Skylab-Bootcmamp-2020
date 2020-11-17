const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const inputSchema = new Schema({
  'input-text': { type: String },
});
module.exports = model('Input', inputSchema);

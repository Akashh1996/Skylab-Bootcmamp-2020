const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const inputSchema = new Schema({
  name: { type: String },
});
module.exports = model('inputs', inputSchema);

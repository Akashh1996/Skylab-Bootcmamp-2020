const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  name: String,
  description: String,
  url: String,
  participants: Array,
  creator: String,
});

module.exports = model('projects', projectSchema);

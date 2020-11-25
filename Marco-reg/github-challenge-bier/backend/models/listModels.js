const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const listSchema = new Schema({
  projectUser: [String],
  projectName: { type: String },
  projectInfo: { type: String },
  projectOwner: { type: String },
  photo: { type: String },
  technology: [String],
});

module.exports = model('item', listSchema);

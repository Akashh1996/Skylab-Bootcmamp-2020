/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const listSchema = new Schema({
  task: { type: String },
});

module.exports = model('Todolists', listSchema);

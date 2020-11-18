const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const tvshowSchema = new Schema({
  name: { type: String },
}, { versionKey: false });

module.exports = model('Tvshows', tvshowSchema);

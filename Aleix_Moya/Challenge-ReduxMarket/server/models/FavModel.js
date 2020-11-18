const mongoose = require('mongoose');
const addedWargear = require('./WModel');

const { Schema, model } = mongoose;

const favSchema = new Schema({
  identifier: { type: Schema.Types.ObjectId, ref: addedWargear },
});

module.exports = model('selectedWeapons', favSchema);

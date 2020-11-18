const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const weaponSchema = new Schema({
  name: { type: String },
  points: { type: Number },
  Range: { type: Number },
  Type: { type: String },
  NoS: { type: Schema.Types.Mixed },
  S: { type: Number },
  Ap: { type: Number },
  D: { type: Schema.Types.Mixed },
  Ability: { type: String },
});

module.exports = model('wargears', weaponSchema);

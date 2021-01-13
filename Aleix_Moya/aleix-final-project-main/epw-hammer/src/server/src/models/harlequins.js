const { Schema, model } = require('mongoose');

const basicStats = new Schema({
  name: String,
  Range: String,
  Type: String,
  NoS: { type: Schema.Types.Mixed },
  S: { type: Schema.Types.Mixed },
  Ap: Number,
  D: { type: Schema.Types.Mixed },
  Ability: String,
});

const Effects = new Schema({
  Effect1: { type: basicStats },
  Effect2: { type: basicStats },
});

const Stats = new Schema({
  name: String,
  Range: String,
  Type: String,
  NoS: { type: Schema.Types.Mixed },
  S: { type: Schema.Types.Mixed },
  Ap: Number,
  D: { type: Schema.Types.Mixed },
  Ability: String,
  profile: {
    Dispersed: { type: basicStats },
    Focused: { type: basicStats },
    melta: { type: Effects },
  },

});

module.exports = model('harlequinwargears', Stats);

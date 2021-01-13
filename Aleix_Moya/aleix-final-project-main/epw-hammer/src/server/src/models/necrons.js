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
    Low_Power: { type: basicStats },
    High_Power: { type: basicStats },
    Dispersed: { type: basicStats },
    Focused_Max_Range: { type: basicStats },
    Focused_Half_Range: { type: basicStats },
    Reaping_Sweep: { type: basicStats },
    Entropic_Blow: { type: basicStats },
  },

});

module.exports = model('necronwargears', Stats);

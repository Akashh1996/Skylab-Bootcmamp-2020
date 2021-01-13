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
  Overcharged: { type: basicStats },
  profile: {
    bolter: { type: basicStats },
    Cleve: { type: basicStats },
    Dispersed: { type: basicStats },
    Executioner_Round: { type: basicStats },
    flamer: { type: basicStats },
    Focused: { type: basicStats },
    frag: { type: basicStats },
    grav: { type: basicStats },
    Hyperfrag_Round: { type: basicStats },
    icarus: { type: basicStats },
    krak: { type: basicStats },
    melta: { type: Effects },
    Mortis_Round: { type: basicStats },
    Plasma: { type: basicStats },
    Scythe: { type: basicStats },
  },

});

module.exports = model('wargears', Stats);

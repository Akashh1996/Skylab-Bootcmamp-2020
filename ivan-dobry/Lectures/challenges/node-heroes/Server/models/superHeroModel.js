const { Schema, model } = require('mongoose');

const powerStatSchema = new Schema({
  intelligence: { type: Number },
  strength: { type: Number },
  speed: { type: Number },
  durability: { type: Number },
  power: { type: Number },
  combat: { type: Number },
});

const appearanceSchema = new Schema({
  gender: { type: String },
  race: { type: String },
  height: [String],
  weight: [String],
  eyeColor: { type: String },
  hairColor: { type: String },
});

const biographySchema = new Schema({
  fullName: { type: String },
  alterEgos: { type: String },
  aliases: [String],
  placeOfBirth: { type: String },
  firstAppearance: { type: String },
  publisher: { type: String },
  alignment: { type: String },
});

const workSchema = new Schema({
  occupation: { type: String },
  base: { type: String },
});

const connectionsSchema = new Schema({
  groupAffiliation: { type: String },
  relatives: { type: String },
});

const immagesSchema = new Schema({
  xs: { type: String },
  sm: { type: String },
  md: { type: String },
  lg: { type: String },
});

const superHeroSchema = new Schema({

  id: { type: Number },
  name: { type: String },
  slug: { type: String },
  powerstats: {
    type: powerStatSchema,
    default: {},
  },
  appearance: {
    type: appearanceSchema,
    default: {},
  },
  biography: {
    type: biographySchema,
    default: {},
  },
  work: {
    type: workSchema,
    default: {},
  },
  connections: {
    type: connectionsSchema,
    default: {},
  },
  images: {
    type: immagesSchema,
    default: {},
  },

});

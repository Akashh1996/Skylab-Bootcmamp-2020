const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const powerStatesSchema = new Schema ({
    "intelligence": {type: Number},
      "strength": {type: Number},
      "speed": {type: Number},
      "durability": {type: Number},
      "power": {type: Number},
      "combat": {type: Number}

})

const appearanceSchema = new Schema ({
  "gender": {type: String},
      "race": {type: String},
      "height": [String],
      "weight": [String],
      "eyeColor": {type: String},
      "hairColor": {type: String},
})

const superHeroSchema = new Schema({
    "id": {type: Number},
    "name": {type: String},
    "slug": {type: String},
    "powerstats": {
      type: powerStatesSchema,
      default: {},
    },
    "appearance": {
      type: appearanceSchema,
      default: {},
      
    },
});

module.exports = model('superheroes', superHeroSchema);
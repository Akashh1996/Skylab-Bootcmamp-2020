// @ts-nocheck
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {type: String},
  familyName: {type: String},
  givenName: {type: String},
  id: {type: String},
  name: {type: String},
  photoUrl: {type: String},
  favoriteRecipes: { type : Array, "default" : [] },
  groceryList: { type : Array, "default" : [] },
  menus: { type : Array, "default" : [] },
  ownRecipes: { type : Array, "default" : [] },
});

module.exports = model('users', userSchema);
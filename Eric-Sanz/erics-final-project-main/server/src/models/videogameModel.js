const { Schema, model } = require('mongoose');

const videogameSchema = new Schema({
  id: { type: String },
  name: { type: String },
  genre: { type: [String] },
  platforms: { type: [String] },
  developer: { type: String },
  cover: { type: String },
  images: { type: [String] },
  description: { type: [Object] },
  pegi: { type: String },
  price: { type: String },
  salePrice: { type: String },
  stock: { type: Boolean },
  release: { type: String },
  comments: { type: [String] },
  sales: { type: Boolean },
  playStation: { type: Boolean },
  photoSlider: { type: String },
});

module.exports = model('videogames', videogameSchema);

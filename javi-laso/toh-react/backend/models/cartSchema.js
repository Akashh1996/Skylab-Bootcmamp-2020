const { Schema, model } = require('mongoose');

const carSchema = new Schema({
  brand: String,
  name: String,
  doors: Number,
  color: String,
});

module.exports = model('Car', carSchema);

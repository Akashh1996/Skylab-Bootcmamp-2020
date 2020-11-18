const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartShema = new Schema({
  quantity: { type: Number },
  price: { type: Number },
});

module.exports = model('carts', cartShema);

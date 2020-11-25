const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  cartProduct: { type: Schema.Types.ObjectId, ref: 'products' },
  quantity: { type: Number },
});

module.exports = model('carts', cartSchema);

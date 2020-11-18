const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Item' },
  quantity: Number,
  user: String,
});

module.exports = model('CartItem', cartSchema);

const { Schema, model } = require('mongoose');

const cartSchema = new Schema({

  product: [{ type: Schema.Types.ObjectId, ref: 'product' }],
  quantity: Number,
  user: String,

});

module.exports = model('cart', cartSchema);

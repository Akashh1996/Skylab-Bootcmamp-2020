const { Schema, model } = require('mongoose');

const checkoutSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  postalCode: { type: String },
  cartList: [{ type: Schema.Types.ObjectId, ref: 'product' }],
  product: { type: Array },

});

module.exports = model('checkout', checkoutSchema);

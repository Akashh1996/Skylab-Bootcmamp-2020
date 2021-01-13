// @ts-nocheck
const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  product: { type: String },
  type: { type: String },
  isCrossed: {type: Boolean}
});

module.exports = model('foodgroups', productSchema);
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartSchema = new Schema({
    productList: { type: Array }
});

module.exports = model('carts', cartSchema);
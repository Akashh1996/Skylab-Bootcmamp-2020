const mongoose = require ('mongoose');

const { Schema, model } = mongoose;

const saberSchema = new Schema({
    "product-name": { type: String },
    "product-image-url": { type: String },
    "product-black-image-url": { type: String },
    "product-url": { type: String },
    "product-price": { type: Number },
    "product-description": { type: String },
    "colors": { type: Array },
    "actual-color": { type: String },
    "product-specifications": {
        "length": { type: String },
        "diameter": { type: String },
        "inner-diameter": { type: String },
        "weight": { type: String },
        "blade-socket": { type: String },
        "belt Clip Type": { type: String },
        "finish": { type: String },
        "material": { type: String },
    },
});

module.exports = model('sabers', saberSchema);
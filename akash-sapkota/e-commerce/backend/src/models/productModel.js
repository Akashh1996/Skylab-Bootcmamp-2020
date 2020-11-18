const mongoose = require("mongoose")

const {Schema, model} = mongoose

const productSchema = new Schema({
    "id": {type: Number},
    "title": {type: String},
    "price": {type: Number},
    "description": {type: String},
    "category":{type : String},
    "image": {type: String}
})

module.exports = model("products", productSchema)
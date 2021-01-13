const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const recipeSchema = new Schema ({
    "name_dish": {type: String},
    "cooker": {type: Schema.Types.ObjectId, ref: 'User'},
    "specifications": [String],
    "ingredients": [String],
    "description_dish": {type: String},
    "price_dish": {type: String},
    "reviews": [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

module.exports = model('Recipe', recipeSchema);
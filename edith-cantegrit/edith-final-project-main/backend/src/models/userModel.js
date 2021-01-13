const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const placesSchema = new Schema({
   "id": {type: Number},
   "name": {type: String}
 });

const userSchema = new Schema ({
    "user_name": {type: String},
    "avatar_url": {type: String},
    "user_description": {type: String},
    "user_email": {type: String},
    "user_address": {type: String},
    "type": [String],
    "delivery_places": [{
        type: placesSchema,
        default: {},
    }],
    "favourite_cookers": {type: Schema.Types.ObjectId, ref: 'User'},
    "store_recipes": {type: Schema.Types.ObjectId, ref: 'Recipe'},
    "weekmenu_tuppers": {type: Schema.Types.ObjectId, ref: 'Tupper'}
});

module.exports = model('User', userSchema);


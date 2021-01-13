const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const tupperSchema = new Schema ({
    "recipe": {type: Schema.Types.ObjectId, ref: 'Recipe'},
    "tuppers_total": {type: Number},
    "tuppers_bought": {type: Number},
    "delivery_time": {type: String},
    "delivery_place": {type: String},
    "buyers": {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = model('Tupper', tupperSchema);
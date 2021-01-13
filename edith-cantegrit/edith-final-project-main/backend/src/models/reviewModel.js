const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const reviewSchema = new Schema ({
    "author": {type: Schema.Types.ObjectId, ref: 'User'},
    "content": {type: String},
    "stars": {type: Number}
});

module.exports = model('Review', reviewSchema);
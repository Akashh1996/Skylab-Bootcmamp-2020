const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const toDoListSchema = new Schema ({
    'item': {type: String}
});

module.exports = model('items', toDoListSchema);
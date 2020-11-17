const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoShcema = new Schema({
    id: {type: Number},
    name: {type: String},
});

module.exports = model('todos', todoShcema);

[{id:1,name:"Create a todo list"}]
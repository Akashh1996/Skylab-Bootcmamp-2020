const express = require('express');
const toDoListController = require('../controllers/toDoListController');
const itemDeleteController = require('../controllers/itemDeleteController');

function toDoListRouter(Items) {
    const router =  express.Router();
    const todolist = toDoListController(Items);
    const itemdelete = itemDeleteController(Items)

    router.route('/')
    .get(todolist.getMethod)
    .put(todolist.putMethod)
    
    router.route('/:id')
    .delete(itemdelete.deleteMethod)

    return router;
}

module.exports = toDoListRouter;
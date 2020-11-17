const express = require('express');
const sabersRouter = require('../../../../e-commerce/backend/routes/sabersRoutes');
const todoController = require('../controllers/todoController');

function todoRouter(Todo) {
    const router = express.Router();
    const todo = todoController(Todo);

    router.route('/')
    .get(todo.getMethod);

    return router;
}

module.exports = sabersRouter;
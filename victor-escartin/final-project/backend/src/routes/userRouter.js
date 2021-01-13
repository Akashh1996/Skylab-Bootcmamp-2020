const { Router } = require('express');
const userController = require('../controllers/usersController');

function routes(userSchema) {
  const router = Router();
  const userItems = userController(userSchema);

  router.route('/')
    .get(userItems.getUsersMethod)
    .put(userItems.putUserMethod);

  return router;
}

module.exports = routes;

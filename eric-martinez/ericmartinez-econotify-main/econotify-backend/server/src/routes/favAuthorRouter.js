const { Router } = require('express');
const favAuthorController = require('../controllers/favAuthorController/favAuthorController');

function favAuthorRouter(User) {
  const router = Router();

  const user = favAuthorController(User);

  router.route('')
    .put(user.putMethod)
    .post(user.postMethod);

  router.route('/:userId')
    .get(user.getMethod);

  return router;
}

module.exports = favAuthorRouter;

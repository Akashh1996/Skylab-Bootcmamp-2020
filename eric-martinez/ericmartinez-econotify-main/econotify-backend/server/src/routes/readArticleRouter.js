const { Router } = require('express');
const readArticleController = require('../controllers/favArticlesController/readArticlesController');

function readArticleRouter(User) {
  const router = Router();

  const user = readArticleController(User);

  router.route('')
    .put(user.putMethod)
    .post(user.askSaveArticleMethod);

  router.route('/:userId')
    .get(user.getMethod);

  return router;
}

module.exports = readArticleRouter;

const { Router } = require('express');
const authorController = require('../controllers/authorController/authorController');

function articlesRouter() {
  const router = Router();

  const author = authorController();

  router.route('/:authorId')
    .get(author.getMethod);

  return router;
}

module.exports = articlesRouter;

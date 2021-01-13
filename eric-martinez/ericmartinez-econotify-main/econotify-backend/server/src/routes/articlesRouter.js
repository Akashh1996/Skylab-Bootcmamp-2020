const { Router } = require('express');
const articlesListController = require('../controllers/articlesListController/articlesListController');
const articleController = require('../controllers/articleController/articleController');
const searchArticlesController = require('../controllers/searchArticlesController/searchArticlesController');

function articlesRouter() {
  const router = Router();

  const articles = articlesListController();
  const article = articleController();
  const searchArticles = searchArticlesController();

  router.route('/list/:pageNum')
    .get(articles.getMethod);

  router.route('/:articleId')
    .get(article.getMethod);

  router.route('/list/search/:term')
    .get(searchArticles.getMethod);

  return router;
}

module.exports = articlesRouter;

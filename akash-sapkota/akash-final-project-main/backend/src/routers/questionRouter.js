const { Router } = require('express');
const questionController = require('../controllers/questionController');

function questionRouter(Question) {
  const router = Router();
  const question = questionController(Question);

  router.route('/:questionId')
    .all(question.allMiddleware)
    .get(question.getMethod)
    .put(question.putMethod);
  return router;
}

module.exports = questionRouter;

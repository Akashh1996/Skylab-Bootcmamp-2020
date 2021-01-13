const { Router } = require('express');
const questionsController = require('../controllers/questionsController');

function questionsRouter(Question) {
  const router = Router();
  const question = questionsController(Question);

  router.route('/')
    .get(question.getMethod)
    .delete(question.deleteMethod)
    .put(question.putMethod)
    .post(question.postMethod);

  router.route('/:userId')
    .get(question.getQuestionsUser);

  return router;
}

module.exports = questionsRouter;

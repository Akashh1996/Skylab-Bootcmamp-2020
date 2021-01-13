const { Router } = require('express');
const answerController = require('../controllers/answerController');

function answerRouter(Answer, Question) {
  const router = Router();
  const answer = answerController(Answer, Question);

  router.route('/')
    .delete(answer.deleteMethod)
    .post(answer.postMethod);
  return router;
}

module.exports = answerRouter;

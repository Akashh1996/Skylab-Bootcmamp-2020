const { Router } = require('express');
const reviewController = require('../controllers/reviewController');

function reviewRouter(Review) {
  const router = Router();
  const review = reviewController(Review);

  router.route('/')
    .get(review.getMethod)
    

  return router;
}

module.exports = reviewRouter;
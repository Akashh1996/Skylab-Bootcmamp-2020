const express = require('express');

const contactController = require('../controllers/contactController');

function contactRouter(Message) {
  const router = express.Router();
  const message = contactController(Message);

  router.route('/')
    .get(message.getMethod)
    .put(message.putMethod)
    .post(message.postMethod);

  return router;
}

module.exports = contactRouter;

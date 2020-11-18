const express = require('express');

function heroRouter(heroes) {
  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      res.send(heroes);
    });
  // .post((req, res) => {

  // })
  // .put((req, res) => {

  // })
  // .delete((req, res) => {

  // });

  return router;
}

module.exports = heroRouter;

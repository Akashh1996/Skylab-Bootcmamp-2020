const express = require('express');
const sabers = require('../api/clothes.json');

const sabersRouter = express.Router();

function routes() {
  sabersRouter.route('/')
    .get((req, res) => {
      console.log(sabers);
      res.status(200);
      res.send(sabers);
    });
  return sabersRouter;
}

module.exports = routes;

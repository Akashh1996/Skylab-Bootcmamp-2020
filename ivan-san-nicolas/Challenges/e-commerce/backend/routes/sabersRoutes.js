const express = require('express');
const sabers = require('../api/sabers.json');

const sabersRouter = express.Router();

function routes() {
  sabersRouter.route('/')
    .get((req, res) => {
      console.log(sabers);
      res.status(200);
      res.send(sabers);
    });

  sabersRouter.route('/:saberName').get((req,res) => {
    console.log(req);
    const saberName = req.params.saberName;
    const saber = sabers.find((findingSaber) => findingSaber["product-name"] === saberName);
    res.status(200);
    res.send(saber);
  });
  return sabersRouter;
}

module.exports = routes;

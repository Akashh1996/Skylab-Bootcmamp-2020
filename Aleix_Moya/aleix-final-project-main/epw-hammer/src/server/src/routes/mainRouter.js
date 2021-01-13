const { Router } = require('express');
const WargearController = require('../controllers/mainController.js');

function myRouter(MarinesWargear, HarlequinWargear, NecronWargear) {
  const router = Router();
  const gunController = WargearController(MarinesWargear, HarlequinWargear, NecronWargear);

  router.route('/:gunModel')
    .all(gunController.allMethod)
    .get(gunController.getMethod);

  return router;
}

module.exports = myRouter;

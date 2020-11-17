const { Router } = require('express');
const inputsController = require('../controllers/inputsController');

function inputsRouter(inputsSchema) {
  const router = Router();
  const inputs = inputsController(inputsSchema);

  router.route('/')
    .get(inputs.getMethod)
    .post(inputs.postMethod)
    .patch(inputs.patchMethod)
    .delete(inputs.deleteMethod);

  return router;
}

module.exports = inputsRouter;

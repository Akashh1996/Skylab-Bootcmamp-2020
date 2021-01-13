const { Router } = require('express');
const characterController = require('../controllers/characterController');
const characterByKeyController = require('../controllers/characterByKeyController');

function characterRouter(Character) {
  const router = Router();
  const character = characterController(Character);
  const characterByKey = characterByKeyController(Character);

  router.route('/')
    .get(character.getMethod)
    .patch(character.patchMethod)
    .delete(character.deleteMethod)
    .post(character.postMethod);

  router.route('/getByKey')
    .get(characterByKey.getMethod);

  return router;
}

module.exports = characterRouter;

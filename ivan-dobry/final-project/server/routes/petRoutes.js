const express = require('express');
const petsController = require('../controllers/petsController');
const petController = require('../controllers/petController');
const petTypeController = require('../controllers/petTypeController');

function routes(pets) {
  const petRouter = express.Router();
  const pet = petsController(pets);
  const detailPet = petController(pets);
  const petType = petTypeController(pets);

  petRouter.route('/')
    .get(pet.getMethod)
    .put(pet.putMethod);

  petRouter.route('/detail')
    .get(detailPet.getMethod);

  petRouter.route('/type')
    .get(petType.getMethod);
  return petRouter;
}

module.exports = routes;

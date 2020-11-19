const { Router } = require('express');
const countryModel = require('../models/countryModel');
const userController = require('../controllers/userController');

function UserRouter(User) {
  const router = Router();
  const userMethods = userController(User, countryModel);

  router.get('/', userMethods.getMethod);

  router.put('/', userMethods.putMethod);

  return router;
}

module.exports = UserRouter;

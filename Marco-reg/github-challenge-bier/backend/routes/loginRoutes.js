const express = require('express');
const loginController = require('../controllers/loginController');

function loginRoutes() {
  const loginRouter = express.Router();
  const login = loginController();
  loginRouter.route('/')
    .get(login.getMethod);
  return loginRouter;
}

module.exports = loginRoutes;

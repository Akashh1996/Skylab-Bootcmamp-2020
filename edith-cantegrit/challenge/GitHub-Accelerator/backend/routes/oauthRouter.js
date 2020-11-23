const { Router } = require('express');

const oAuthController = require('../controllers/oauthController');

function oAuthRouter(User) {
  const router = Router();
  const oAuth = oAuthController(User);

  router.route('/')
    .get(oAuth.getToken);

  return router;
}

module.exports = oAuthRouter;

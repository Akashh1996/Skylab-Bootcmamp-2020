const { Router } = require('express');
const oauthController = require('../controllers/oauthController');

function oauthRouter(userSchema) {
  const router = Router();
  const oauth = oauthController(userSchema);

  router.route('/')
    .get(oauth.getUser);

  return router;
}

module.exports = oauthRouter;

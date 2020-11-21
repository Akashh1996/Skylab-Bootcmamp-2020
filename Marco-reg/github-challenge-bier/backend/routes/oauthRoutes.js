/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const axios = require('axios');

let token = null;
function oAuthRouter() {
  const clientId = '9af0b5dca2baf5f41861';
  const clientSecret = 'a1a5dfed7293764297fff99b74c6259884531c17';
  const router = Router();
  router.route('/')
    .get(async (req, res) => {
      const body = {
        client_id: clientId,
        client_secret: clientSecret,
        code: req.query.code,
      };
      const opts = { headers: { accept: 'application/json' } };
      const response = await axios.post('https://github.com/login/oauth/access_token', body, opts);
      try {
        const _token = await response.data.access_token;
        token = _token;
        console.log('My token:', token);
        res.json(token);
      } catch (error) {
        res.send(error);
      }
    });
  return router;
}

module.exports = oAuthRouter;

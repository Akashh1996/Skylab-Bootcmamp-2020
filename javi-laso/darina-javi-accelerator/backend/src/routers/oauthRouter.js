const { Router } = require('express');
const axios = require('axios');
const { clientId, clientSecret } = require('../constants/constants');

let token;

function oauthRouter() {
  const router = Router();

  router.route('/')
    .get(async (req, res) => {
      const body = {
        client_id: clientId,
        client_secret: clientSecret,
        code: req.query.code,
      };
      console.log('Response body: ', req.query);
      const opts = { headers: { accept: 'application/json' } };
      const response = await axios.post('https://github.com/login/oauth/access_token', body, opts);
      console.log(response.data);

      try {
        const _token = await response.data.access_token;

        token = _token;
        console.log(token);
        res.send(token);
      } catch (error) {
        res.send(error);
      }
    });

  return router;
}

module.exports = oauthRouter;

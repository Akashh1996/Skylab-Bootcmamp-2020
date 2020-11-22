const { Router } = require('express');
const axios = require('axios');
const { clientId, clientSecret } = require('../constants/constants');

const apiGithubUserUrl = 'https://api.github.com/user';

function oauthRouter(userSchema) {
  const router = Router();

  router.route('/')
    .get(async (req, res) => {
      console.log(req.query);
      const body = {
        client_id: clientId,
        client_secret: clientSecret,
        code: req.query.code,
      };
      const opts = { headers: { accept: 'application/json' } };
      const response = await axios.post('https://github.com/login/oauth/access_token', body, opts);

      try {
        const _token = await response.data.access_token;

        const headers = {
          Authorization: `token ${_token}`,
        };

        const { data } = await axios.get(apiGithubUserUrl, { headers });

        userSchema.findOneAndUpdate({ gitUser: data.login }, {
          name: data.name,
          gitUser: data.login,
          gitPicture: data.avatar_url,
          token: _token,
        },
        { upsert: true },
        (error, user) => (
          error ? res.send(error) : res.send(user)
        ));
      } catch (error) {
        res.send(error);
      }
    });

  return router;
}

module.exports = oauthRouter;

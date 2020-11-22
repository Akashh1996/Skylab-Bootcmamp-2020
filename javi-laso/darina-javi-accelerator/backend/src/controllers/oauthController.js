const axios = require('axios');
const { clientId, clientSecret } = require('../constants/constants');
const constants = require('../constants/constants');

function oauthController(userSchema) {
  async function getUser(req, res) {
    const token = await this.getToken(req.query.code);

    try {
      const headers = {
        Authorization: `token ${token}`,
      };

      const { data } = await axios.get(constants.apiGithubUserUrl, { headers });

      const user = await userSchema.findOneAndUpdate({ gitUser: data.login }, {
        name: data.name,
        gitUser: data.login,
        gitPicture: data.avatar_url,
        token,
      },
      {
        upsert: true,
        returnNewDocument: true,
      });

      return res.send(user);
    } catch (error) {
      return res.send(error);
    }
  }

  async function getToken(code) {
    const body = {
      client_id: clientId,
      client_secret: clientSecret,
      code,
    };
    const opts = { headers: { accept: 'application/json' } };
    let response;
    try {
      const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', body, opts);
      response = tokenResponse.data.access_token;
    } catch (error) {
      response = error;
    }

    return response;
  }

  return { getToken, getUser };
}

module.exports = oauthController;

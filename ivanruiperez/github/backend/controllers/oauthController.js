const axios = require('axios');

const clientId = '8278b1bd13fe2558425a';
const clientSecret = '1580daed2c422108632216786b9ea2747878b9b8';

function oAuthController(User) {
  async function getToken(req, res) {
    const body = {
      client_id: clientId,
      client_secret: clientSecret,
      code: req.query.code,
    };
    const opts = { headers: { accept: 'application/json' } };
    const response = await axios.post('https://github.com/login/oauth/access_token', body, opts);
    try {
      const _token = await response.data.access_token;

      const user = await axios({
        url: 'https://api.github.com/user',
        headers: {
          Authorization: `token ${_token}`,
        },
      });

      User.create(user.data, (errorPutCountry, newUser) => {
        if (errorPutCountry) {
          return res.send(errorPutCountry);
        }
        return res.json(newUser);
      });
    } catch (error) {
      res.send(error);
    }
  }

  return { getToken };
}

module.exports = oAuthController;

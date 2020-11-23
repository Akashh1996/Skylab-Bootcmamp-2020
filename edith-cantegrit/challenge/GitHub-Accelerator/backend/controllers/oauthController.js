const axios = require('axios');

const clientId = '22c91867ed24ebd3d75c';
const clientSecret = 'c3b4e38753d4409f9f12ca6121765531984c19c9';

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
      // eslint-disable-next-line no-console
      console.log(_token);
      const user = await axios({
        url: 'https://api.github.com/user',
        headers: {
          Authorization: `token ${_token}`,
        },
      });

      const newUserLogin = user.data.login;
      // eslint-disable-next-line consistent-return
      User.findOne({ login: newUserLogin }, (errorFindUser, userFind) => {
        if (errorFindUser) {
          return res.send(errorFindUser);
        }
        if (!userFind) {
          User.create(user.data, (errorPutCountry, newUser) => {
            if (errorPutCountry) {
              return res.send(errorPutCountry);
            }
            return res.json(newUser);
          });
        } else {
          res.send(userFind);
        }
      });
    } catch (error) {
      res.send(error);
    }
  }

  return { getToken };
}

module.exports = oAuthController;

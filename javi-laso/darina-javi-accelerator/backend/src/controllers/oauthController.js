const axios = require('axios');
const constants = require('../constants/constants');
const { getToken } = require('../utils/utils');

function oauthController(userSchema) {
  async function getUser(req, res) {
    const token = await getToken(req.query.code);

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

  return { getUser };
}

module.exports = oauthController;

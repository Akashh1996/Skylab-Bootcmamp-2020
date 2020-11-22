const axios = require('axios');
const { clientId, clientSecret } = require('../constants/constants');

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

module.exports = { getToken };

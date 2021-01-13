const axios = require('axios');

async function getfavArticles(articlesId) {
  const userArticlesId = articlesId;
  const urlArticles = userArticlesId.join('__');
  const endpoint = 'https://econotify.csemken.eu/pub/text/?id__in=';

  const { data } = await axios.get(`${endpoint}${urlArticles}`);

  return data;
}

module.exports = { getfavArticles };

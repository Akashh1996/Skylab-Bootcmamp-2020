const axios = require('axios');

function searchArticlesController() {
  async function getMethod(req, res) {
    const { term } = req.params;
    const articlesUrl = `https://econotify.csemken.eu/pub/text/?search=${term}`;
    try {
      const articles = await axios.get(articlesUrl);
      res.json(articles.data);
    } catch (error) {
      res.send(error);
    }
  }
  return {
    getMethod,
  };
}

module.exports = searchArticlesController;

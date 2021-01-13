const axios = require('axios');

function articlesListController() {
  async function getMethod(req, res) {
    const { pageNum } = req.params;
    const articlesUrl = `https://econotify.csemken.eu/pub/text/?page=${pageNum}`;
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

module.exports = articlesListController;

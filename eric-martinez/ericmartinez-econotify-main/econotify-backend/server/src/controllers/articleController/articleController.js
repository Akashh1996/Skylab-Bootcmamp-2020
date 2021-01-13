const axios = require('axios');

function articleController() {
  async function getMethod(req, res) {
    const { articleId } = req.params;
    const articleUrl = `https://econotify.csemken.eu/pub/text/${articleId}`;
    try {
      const article = await axios.get(articleUrl);
      res.json(article.data);
    } catch (error) {
      res.send(error);
    }
  }
  return {
    getMethod,
  };
}

module.exports = articleController;

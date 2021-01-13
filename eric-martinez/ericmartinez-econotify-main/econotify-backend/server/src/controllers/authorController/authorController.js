const axios = require('axios');

function authorController() {
  async function getMethod(req, res) {
    const { authorId } = req.params;
    const authorUrl = `https://econotify.csemken.eu/pub/text/?authors.uid=${authorId}`;
    try {
      const { data: { results } } = await axios.get(authorUrl);
      return res.json(results);
    } catch (error) {
      return res.send(error);
    }
  }
  return {
    getMethod,
  };
}

module.exports = authorController;

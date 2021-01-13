const { getfavArticles } = require('./helpers/helperFn');

/* eslint-disable no-param-reassign */
function readArticlesController(User) {
  function getMethod({ params }, res) {
    const { userId } = params;
    User.findOne({ uid: userId }, async (errorFindUser, user) => {
      if (errorFindUser) {
        res.send(errorFindUser);
      }
      const articles = await getfavArticles(user.readArticles);

      res.json(articles);
    });
  }

  function putMethod({ body }, res) {
    const userId = body.uid;
    User.findOne({ uid: userId }, (errorFindUser, user) => {
      if (user) {
        const findArticle = user.readArticles.some(
          (article) => article === body.articleId,
        );
        if (findArticle) {
          const articleFilter = user.readArticles.filter((article) => article !== body.articleId);
          user.readArticles = articleFilter;
          user.save();
          res.send('delete');
        } else {
          user.readArticles = [...user.readArticles, body.articleId];
          user.save();
          res.json('save');
        }
      } else {
        res.send(errorFindUser);
      }
    });
  }

  function askSaveArticleMethod({ body }, res) {
    const userId = body.uid;
    User.findOne({ uid: userId }, (errorFindUser, user) => {
      if (user) {
        const findArticle = user.readArticles.some(
          (article) => (article === body.articleId),
        );
        if (findArticle) {
          return res.send(true);
        }
        return res.json(false);
      }
      return res.send(errorFindUser);
    });
  }

  return { getMethod, putMethod, askSaveArticleMethod };
}

module.exports = readArticlesController;

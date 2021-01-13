/* eslint-disable no-param-reassign */
function favAuthorController(User) {
  function getMethod({ params }, res) {
    const { userId } = params;
    User.findOne({ uid: userId }, (errorFindUser, user) => {
      if (errorFindUser) {
        return res.send(errorFindUser);
      }
      return res.send(user.authors);
    });
  }
  function postMethod({ body }, res) {
    const userId = body.uid;
    User.findOne({ uid: userId }, (errorFindUser, user) => {
      if (user) {
        const findAuthor = user.authors.some(
          (author) => (author === body.authors),
        );
        if (findAuthor) {
          return res.send(true);
        }
        return res.json(false);
      }
      return res.send(errorFindUser);
    });
  }
  function putMethod({ body }, res) {
    const userId = body.uid;
    User.findOne({ uid: userId }, (errorFindUser, user) => {
      if (user) {
        const findAuthor = user.authors.some(
          (author) => author === body.authors,
        );
        if (findAuthor) {
          const authorFilter = user.authors.filter((author) => author !== body.authors);
          user.authors = authorFilter;
          user.save();
          res.send(false);
        } else {
          user.authors = [...user.authors, body.authors];
          user.save();
          res.json(true);
        }
      } else {
        res.send(errorFindUser);
      }
    });
  }
  return { getMethod, postMethod, putMethod };
}

module.exports = favAuthorController;

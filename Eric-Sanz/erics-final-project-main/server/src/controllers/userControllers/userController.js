function userController(User) {
  function getMethod(req, res) {
    const query = { displayName: req.query.displayName };
    User.findOne(query).populate('favorites').exec((errorFindUser, user) => ((errorFindUser)
      ? res.send(errorFindUser) : res.json(user)));
  }

  function putMethod({ body }, res) {
    const userId = body.uid;
    const query = { uid: userId };
    User.findOneAndUpdate(query, body, { upsert: true, useFindAndModify: false }, (
      errorFindUser, userModified,
    ) => (
      (errorFindUser) ? res.send(errorFindUser) : res.json(userModified)));
  }

  function postMethod({ body }, res) {
    const userId = body.uid;
    User.findOne({ uid: userId }, (errorFindUser, user) => {
      if (user) {
        const findVideogame = user.favorites.some(
          (videogame) => String(videogame) === body.videogame,
        );
        if (findVideogame) {
          const videogameFilter = user.favorites.filter((videogame) => String(videogame) !== body.videogame);
          user.favorites = videogameFilter;
          user.save();
          res.send('delete');
        } else {
          user.favorites = [...user.favorites, body.videogame];
          user.save();
          res.json('save');
        }
      } else {
        res.send(errorFindUser);
      }
    });
  }

  return {
    getMethod,
    putMethod,
    postMethod,
  };
}

module.exports = userController;

function userController(User, Country) {
  function getMethod(req, res) {
    const query = {};
    const user = User.find(query);
    user.populate({
      path: 'address',
      populate: {
        path: 'country',
        model: Country,
      },
    });
    user.exec((errorFindHero, users) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      }

      res.json(users);
    });
  }

  function putMethod(req, res) {
    const user = new User(req.body);
    user.save((error, userSaved) => (error ? res.send(error) : res.json(userSaved)));
  }

  return { getMethod, putMethod };
}

module.exports = userController;

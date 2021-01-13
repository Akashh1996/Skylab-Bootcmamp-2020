function usersController(User) {
  function getMethod(req, res) {
    const query = {};
    User.find(query, (errorFindUsers, users) => {
      if (errorFindUsers) {
        res.send(errorFindUsers);
      } else {
        res.json(users);
      }
    });
  }

  function postMethod(req, res) {
    const query = { id: req.body.id };

    User.findOneAndUpdate(query, req.body, { upsert: true, useFindAndModify: false, new: true },
      (error, newUser) => (error ? res.send(error) : res.json(newUser)));
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = usersController;

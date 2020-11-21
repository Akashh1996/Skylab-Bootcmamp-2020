function userController(User) {
  function getMethod(req, res) {
    const query = {};
    User.find(query, (errorFindUsers, users) => {
      if (errorFindUsers) {
        return res.send(errorFindUsers);
      }
      return res.json(users);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    User.create(query, (errorPutUser, user) => {
      if (errorPutUser) {
        res.send(errorPutUser);
      }
      res.json(user);
    });
  }
  return { getMethod, putMethod };
}

module.exports = userController;

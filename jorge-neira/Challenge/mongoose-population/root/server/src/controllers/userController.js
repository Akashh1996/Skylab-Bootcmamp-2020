function userController(User) {
  function getUserMethod(req, res) {
    const query = {};
    User.find(query, (errorFind, user) => (
      errorFind
        ? res.send(errorFind)
        : res.json(user)));
  }

  function putUserMethod(req, res) {
    const { name, age, address } = req.body;
    User.create({ name, age, address }, (errorCreating, user) => (
      errorCreating
        ? res.send(errorCreating)
        : res.json(user)));
  }

  return { getUserMethod, putUserMethod };
}

module.exports = userController;

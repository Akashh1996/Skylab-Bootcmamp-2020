function userController(userSchema) {
  function getUsersMethod(req, res) {
    const query = {};
    const getCallback = (error, users) => (error ? res.send(error) : res.send(users));
    userSchema.find(query)
      .populate({
        path: 'address',
        populate: { path: 'country' },
      })
      .exec(getCallback);
  }

  function postUsersMethod(req, res) {
    const userToCreate = req.body;
    const postCallback = (error, created) => (error ? res.send(error) : res.send(created));
    userSchema.create(userToCreate, postCallback);
  }

  return {
    getUsersMethod,
    postUsersMethod,
  };
}

module.exports = userController;

function userController(User) {
  function getMethod(req, res) {
    const { userEmail } = req.query;
    const query = { email: userEmail };
    function findCallback(errorFindUser, user) {
      return errorFindUser ? res.send(errorFindUser) : res.json(user);
    }
    User.findOne(query, findCallback);
  }

  function postMethod({ body }, res) {
    const query = { email: body.email };
    User.findOneAndUpdate(query, body, {
      new: true, upsert: true, useFindAndModify: false,
    }, (errorFindUser, userModified) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.json(userModified)
    ));
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = userController;

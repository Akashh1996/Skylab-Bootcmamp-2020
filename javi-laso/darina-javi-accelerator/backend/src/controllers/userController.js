function userController(userSchema) {
  function getUsersMethod(req, res) {
    const query = {};
    const getCallBack = (usersError, users) => (
      usersError ? res.send(usersError) : res.send(users)
    );
    userSchema.find(query, getCallBack);
  }

  function postUserMethod(req, res) {
    const user = req.body;
    const postCallback = (postError, newUser) => (
      postError ? res.send(postError) : res.send(newUser)
    );
    userSchema.create(user, postCallback);
  }

  return { getUsersMethod, postUserMethod };
}

module.exports = userController;

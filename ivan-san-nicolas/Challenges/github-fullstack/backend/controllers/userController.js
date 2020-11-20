/* eslint-disable no-unused-expressions */
function userController(User) {
  function getMethod(req, res) {
    const query = {};

    User.find(query, (errorFindingUsers, users) => {
      errorFindingUsers ? res.send(errorFindingUsers) : res.json(users);
    });
  }

  function postMethod(req, res) {
    const { name, profilePic, githubUrl } = req.body;
    const newUser = { name, profilePic, githubUrl };

    User.create(newUser, (errorCreatingUser, users) => {
      errorCreatingUser ? res.send(errorCreatingUser) : res.json(users);
    });
  }

  return {
    getMethod,
    postMethod,
  };
}

module.exports = userController;

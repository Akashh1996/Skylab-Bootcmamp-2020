/* eslint-disable no-unused-expressions */
function userController(Users) {
  function getMethod(req, res) {
    const { userId } = req.body;
    const query = { _id: userId };

    Users.find(query, (errorFindingUsers, user) => {
      errorFindingUsers ? res.send(errorFindingUsers) : res.json(user);
    });
  }

  function postMethod(req, res) {
    const { name, profilePic, githubUrl } = req.body;
    const newUser = { name, profilePic, githubUrl };

    Users.create(newUser, (errorCreatingUser, user) => {
      errorCreatingUser ? res.send(errorCreatingUser) : res.json(user);
    });
  }

  function patchMethod(req, res) {
    const { userId, updatedUser } = req.body;
    const { name, profilePic, githubUrl } = updatedUser;
    const query = { _id: userId };
    const conditionToUpdate = { name, profilePic, githubUrl };

    Users.findOneAndUpdate(query, conditionToUpdate, (errorUpdatingUser, user) => {
      errorUpdatingUser ? res.send(errorUpdatingUser) : res.json(user);
    });
  }

  function deleteMethod(req, res) {
    const { userId } = req.body;
    const query = { _id: userId };

    Users.deleteOne(query, (errorDeletingUser, user) => {
      errorDeletingUser ? res.send(errorDeletingUser) : res.json(user);
    });
  }

  return {
    getMethod,
    postMethod,
    patchMethod,
    deleteMethod,
  };
}

module.exports = userController;

/* eslint-disable no-unused-expressions */
function projectsController(Projects) {
  function getMethod(req, res) {
    const query = {};

    Projects.find(query)
      .populate('users')
      .exec((errorFindingProjects, projects) => {
        errorFindingProjects ? res.send(errorFindingProjects) : res.json(projects);
      });
  }

  function postMethod(req, res) {
    const { name, profilePic, githubUrl } = req.body;
    const newUser = { name, profilePic, githubUrl };

    Projects.create(newUser, (errorCreatingUser, users) => {
      errorCreatingUser ? res.send(errorCreatingUser) : res.json(users);
    });
  }

  function patchMethod(req, res) {
    const { projectId, updatedUser } = req.body;
    const { name, profilePic, githubUrl } = updatedUser;
    const query = { _id: projectId };
    const conditionToUpdate = { name, profilePic, githubUrl };

    Projects.findOneAndUpdate(query, conditionToUpdate, (errorUpdatingUser, user) => {
      errorUpdatingUser ? res.send(errorUpdatingUser) : res.json(user);
    });
  }

  function deleteMethod(req, res) {
    const { userId } = req.body;
    const query = { _id: userId };

    Projects.deleteOne(query, (errorDeletingUser, user) => {
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

module.exports = projectsController;

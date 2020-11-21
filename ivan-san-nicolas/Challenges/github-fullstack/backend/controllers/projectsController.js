/* eslint-disable no-unused-expressions */

function projectsController(Projects) {
  function getMethod(req, res) {
    const query = {};

    Projects.findOne(query)
      .populate('users')
      .exec((error, projects) => {
        error ? res.send(error) : res.json(projects);
      });
  }

  function postMethod(req, res) {
    const {
      name, description, url, participants, creator,
    } = req.body;
    const newUser = {
      name, description, url, participants, creator,
    };

    Projects.create(newUser, (error, users) => {
      error ? res.send(error) : res.json(users);
    });
  }

  function patchMethod(req, res) {
    const { projectId, updatedUser } = req.body;
    const { name, profilePic, githubUrl } = updatedUser;
    const query = { _id: projectId };
    const conditionToUpdate = { name, profilePic, githubUrl };

    Projects.findOneAndUpdate(query, conditionToUpdate, (error, user) => {
      error ? res.send(error) : res.json(user);
    });
  }

  function deleteMethod(req, res) {
    const { userId } = req.body;
    const query = { _id: userId };

    Projects.deleteOne(query, (error, user) => {
      error ? res.send(error) : res.json(user);
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

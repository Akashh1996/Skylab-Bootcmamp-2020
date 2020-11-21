/* eslint-disable no-unused-expressions */
function projectController(Projects) {
  function getMethod(req, res) {
    const { projectId } = req.body;
    const query = { _id: projectId };
    const callback = (error, project) => {
      error ? res.send(error) : res.json(project);
    };

    Projects.find(query)
      .populate()
      .exec(callback);
  }

  function postMethod(req, res) {
    const {
      name, description, url, participants, creator,
    } = req.body;
    const newProject = {
      name, description, url, participants, creator,
    };

    Projects.create(newProject, (error, project) => {
      error ? res.send(error) : res.json(project);
    });
  }

  function patchMethod(req, res) {
    const { projectId, updatedProject } = req.body;
    const {
      name, description, url, participants, creator,
    } = updatedProject;
    const query = { _id: projectId };
    const conditionToUpdate = {
      name, description, url, participants, creator,
    };

    Projects.findOneAndUpdate(query, conditionToUpdate, (error, project) => {
      error ? res.send(error) : res.json(project);
    });
  }

  function deleteMethod(req, res) {
    const { projectId } = req.body;
    const query = { _id: projectId };

    Projects.deleteOne(query, (error, project) => {
      error ? res.send(error) : res.json(project);
    });
  }

  return {
    getMethod,
    postMethod,
    patchMethod,
    deleteMethod,
  };
}

module.exports = projectController;

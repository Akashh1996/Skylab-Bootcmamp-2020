function userController(userSchema) {
  function getUsersMethod(req, res) {
    const query = {};
    const getCallBack = (projectsError, projects) => (
      projectsError ? res.send(projectsError) : res.send(projects)
    );
    userSchema.find(query, getCallBack);
  }

  function postUserMethod(req, res) {
    const project = req.body;
    const postCallback = (postError, newUser) => (
      postError ? res.send(postError) : res.send(newUser)
    );
    userSchema.create(project, postCallback);
  }

  return { getUsersMethod, postUserMethod };
}

module.exports = userController;

function projectsController(Project) {
    function getMethod(req, res) {
      const query = {};
      Project.find(query,(errorFindProjects, projects) => ((errorFindProjects)
          ? res.send(errorFindProjects)
          : res.json(projects)));
    }
 
    function putMethod(req, res) {
      const project = new Project(req.body);
  
      project.save((error, projectsaved) => (error ? res.send(error) : res.json(projectsaved)));
    }
  
    return {
      getMethod, putMethod,
    };
  }
  
  module.exports = projectsController;
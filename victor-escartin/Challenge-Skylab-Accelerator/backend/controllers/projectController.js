function projectController(Project) {
    function getMethod(req, res) {
      const query = {};
      Project.find(query, (errorProject, project) => (errorProject ? res.send(errorProject) : res.json(project)));
    }
    function deleteMethod({ body }, res) {
        Project.findByIdAndRemove(body._id, body, (errorDeleteProduct, removedProject) => (errorDeleteProduct ? res.send(errorDeleteProduct) : res.send(removedProject)));
    }
    function postMethod({ body }, res) {
        Project.findByIdAndUpdate(body._id, body, (errorFindProject, updatedTodo) => (errorFindProject ? res.send(errorFindProject) : res.send(updatedTodo)));
    }
    function putMethod(req, res) {
      const newProject = req.body;
      Project.create(newProject, (errorNewProject) => (errorNewProject ? res.send(errorNewProject) : res.send(newProject)));
    }
    function getOneMethod(req,res){
        const query = req.body
        Project.findById(query, (errorProject, detail) => (errorProject ? res.send(errorProject) : res.json(detail)));

    }
    return {
      getMethod, deleteMethod, putMethod, postMethod,getOneMethod
    };
  }
  
  module.exports = projectController;
  
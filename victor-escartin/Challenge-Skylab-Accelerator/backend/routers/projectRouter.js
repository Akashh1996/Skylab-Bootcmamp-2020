const { Router } = require('express');
const projectController = require('../controllers/projectController');

function projectRouter(Project) {
  const router = Router();
  const project = projectController(Project);

  router.route('/')
    .get(project.getMethod)
    .delete(project.deleteMethod)
    .put(project.putMethod)
    .post(project.postMethod)

    router.route("/detail")
      .get(project.getOneMethod)
  return router;
}

module.exports = projectRouter;
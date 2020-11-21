const express = require('express');
const projectController = require('../controllers/projectController');
const projectsController = require('../controllers/projectsControllers');

function projectRouter(Project) {
  const router = express.Router();
  const project = projectController(Project);
  const projects = projectsController(Project);

  router.route('/')
    .get(projects.getMethod)
    .put(projects.putMethod);

  router.route('/:projectId')
    .all(project.allMiddleware)
    .get(project.getMethod)
    .post(project.postMethod)
    .delete(project.deleteMethod);

  return router;
}

module.exports = projectRouter;
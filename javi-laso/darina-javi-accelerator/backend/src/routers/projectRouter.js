const { Router } = require('express');
const projectController = require('../controllers/projectController');
const projectIdController = require('../controllers/projectIdController');

function projectRouter(projectSchema) {
  const router = Router();
  const projects = projectController(projectSchema);
  const project = projectIdController(projectSchema);

  router.route('/')
    .get(projects.getProjectsMethod)
    .post(projects.postProjectMethod);

  router.route('/:projectId')
    .get(project.getProjectDetailMethod);

  return router;
}

module.exports = projectRouter;

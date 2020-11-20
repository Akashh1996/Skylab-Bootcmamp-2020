const { Router } = require('express');
const projectController = require('../controllers/projectController');

function projectRouter(projectSchema) {
  const router = Router();
  const projects = projectController(projectSchema);

  router.route('/')
    .get(projects.getProjectsMethod);

  return router;
}

module.exports = projectRouter;

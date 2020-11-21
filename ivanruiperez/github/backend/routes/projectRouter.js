const express = require('express');
const projectController = require('../controllers/projectController');

function projectRouter(Project) {
  const router = express.Router();
  const project = projectController(Project);
  router.route('/')
    .get(project.getMethod);

  return router;
}

module.exports = projectRouter;

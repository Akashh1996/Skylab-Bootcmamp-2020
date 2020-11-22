const express = require('express');
const projectController = require('../controllers/projectController');
const detailController = require('../controllers/detailController');

function projectRouter(Project) {
  const router = express.Router();
  const project = projectController(Project);
  const detail = detailController(Project);
  router.route('/')
    .get(project.getMethod)
    .put(project.putMethod);

  router.route('/:projectId')
    .get(detail.getMethodDetail);
  return router;
}

module.exports = projectRouter;

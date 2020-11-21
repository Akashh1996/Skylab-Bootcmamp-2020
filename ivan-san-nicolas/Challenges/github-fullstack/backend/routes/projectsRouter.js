const { Router } = require('express');
const projectsController = require('../controllers/projectsController');

function projectsRouter(Projects) {
  const router = Router();
  const projects = projectsController(Projects);

  router.route('/')
    .get(projects.getMethod);

  return router;
}

module.exports = projectsRouter;

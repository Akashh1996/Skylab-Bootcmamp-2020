const { Router } = require('express');
const projectsController = require('../controllers/projectsController');

function projectsRouter(Projects) {
  const router = Router();
  const projects = projectsController(Projects);

  router.route('/')
    .get(projects.getMethod)
    .post(projects.postMethod)
    .patch(projects.patchMethod)
    .delete(projects.deleteMethod);

  return router;
}

module.exports = projectsRouter;

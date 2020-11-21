const { Router } = require('express');
const projectController = require('../controllers/projectController');

function projectRouter(Projects) {
  const router = Router();
  const project = projectController(Projects);

  router.route('/')
    .get(project.getMethod)
    .post(project.postMethod)
    .patch(project.patchMethod)
    .delete(project.deleteMethod);

  return router;
}

module.exports = projectRouter;

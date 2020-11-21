const { Router } = require('express');

const githubController = require('../controllers/githubController');

function gitHubRouter() {
  const router = Router();
  const github = githubController();

  router.route('/')
    .get(github.getGitHubMethod);

  return router;
}

module.exports = gitHubRouter;

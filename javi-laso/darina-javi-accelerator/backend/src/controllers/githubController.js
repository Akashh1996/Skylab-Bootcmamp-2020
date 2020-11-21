const { clientId } = require('../constants/constants');

function githubController() {
  function getGithubMethod(req, res) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`);
  }

  return { getGithubMethod };
}

module.exports = githubController;

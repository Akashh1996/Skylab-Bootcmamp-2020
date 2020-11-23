const clientId = '22c91867ed24ebd3d75c';

function githubController() {
  function getGitHubMethod(req, res) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`);
  }
  return { getGitHubMethod };
}

module.exports = githubController;

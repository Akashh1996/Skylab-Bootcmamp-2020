const clientId = '8278b1bd13fe2558425a';

function githubController() {
  function getGitHubMethod(req, res) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`);
  }
  return { getGitHubMethod };
}

module.exports = githubController;

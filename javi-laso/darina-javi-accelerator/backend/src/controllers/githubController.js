const { clientId } = require('../constants/constants');

//

function githubController() {
  function allMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Origin,Content-Type,X-Auth-Token');
    res.header('Access-Control-Expose-Headers', 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
  }

  function getGithubMethod(req, res) {
    // eslint-disable-next-line no-console
    console.log('Redirigido');
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`);
  }

  return { getGithubMethod, allMiddleware };
}

module.exports = githubController;

// https://cors-anywhere.herokuapp.com/

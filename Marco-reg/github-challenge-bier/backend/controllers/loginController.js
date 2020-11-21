function loginController() {
  const clientId = '9af0b5dca2baf5f41861';
  function getMethod(req, res) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
  }

  return { getMethod };
}

module.exports = loginController;

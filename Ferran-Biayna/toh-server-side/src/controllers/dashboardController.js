function dashboardController(Hero) {
  function getMethod(req, res) {
    const query = {};
    Hero.find(query, (errorFindDashboard, dashboard) => (errorFindDashboard
      ? res.render('home', { dashboard: errorFindDashboard })
      : res.render('home', { dashboard })));
  }

  return {
    getMethod,
  };
}

module.exports = dashboardController;

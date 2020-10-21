const store = new Store(heroes);

const dashboard = document.getElementById('dashboard-list');
store.updateHTMLHeroesDashboard(dashboard);

store.loadHeroes('../../api/superHeroData.json', 'json', store.logData);
const store = new Store(heroes);

const dashboard = document.getElementById('dashboard-list');
store.updateHTMLHeroesDashboard(dashboard);
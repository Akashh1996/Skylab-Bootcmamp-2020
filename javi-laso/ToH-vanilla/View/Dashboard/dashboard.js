const store = new Store();

const dashboard = document.getElementById('dashboard-list');
store.loadHeroes().then(() => {
    store.updateHTMLHeroesDashboard(dashboard);
});
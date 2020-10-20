const store = new Store(heroes);

const heroesList = document.getElementById('heroes-list');
store.updateHTMLHeroesList(heroesList);
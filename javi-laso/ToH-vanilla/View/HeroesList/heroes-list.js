const heroesList = document.getElementById('heroes-list');
store.loadHeroes().then(() => {
    store.updateHTMLHeroesList(heroesList);
});
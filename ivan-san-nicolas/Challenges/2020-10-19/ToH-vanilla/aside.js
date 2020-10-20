function topHeroes(store) {
    const asideHeroes = store.getTopHeroes();
    for (i in asideHeroes) {
        document.getElementById(`aside__heroe-${i}`).innerHTML = asideHeroes[i].name;
    }
}

topHeroes(store);
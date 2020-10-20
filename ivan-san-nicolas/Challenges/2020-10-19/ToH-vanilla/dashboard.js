function topHeroes(store) {
    const topHeroes = store.getTopHeroes();
    for (i in topHeroes) {
        document.getElementById(`heroe-${i}`).innerHTML = topHeroes[i].name;
    }
}

topHeroes(store);
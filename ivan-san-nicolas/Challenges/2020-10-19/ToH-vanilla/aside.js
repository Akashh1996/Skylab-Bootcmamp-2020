function topHeroes(store) {
    const asideHeroes = store.getTopHeroes();
    const heroesBlock = document.getElementById('aside-heroes-block');
    for (let index = 1; index < 11; index++) {
        let element = document.createElement('a')
    }
}

topHeroes(store);
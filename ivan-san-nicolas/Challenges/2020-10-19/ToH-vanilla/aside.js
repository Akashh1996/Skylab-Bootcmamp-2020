function asideHeroes(store) {
    const asideHeroes = store.getTopHeroes();
    debugger;
    const heroesBlock = document.getElementById('aside-heroes-block');
    if (asideHeroes) {
        for (let index = 0; index < 11; index++) {
            let element = document.createElement('a');
            element.innerHTML = `
            <a class="topHeroes-block" href="detail.html?id=${index + 1}">
            <div class="topHeroes-block__position" id="aside-heroe-${index}-pos"></div>
            <span class="topHeroes-block__name" id="aside__heroe-${index}-name"></span></a>
            `;
            heroesBlock.appendChild(element);
            document.getElementById(`aside-heroe-${index}-pos`).innerHTML = asideHeroes[index].id;
            document.getElementById(`aside__heroe-${index}-name`).innerHTML = asideHeroes[index].name;
        }
    }
}

asideHeroes(store);

module.exports = asideHeroes;
function topHeroes(store) {
    const topHeroes = store.getTopHeroes();
    const dashboardHeroes = document.getElementById('dashboard-heroes');
    if (topHeroes) {
        for (let index = 0; index < 4; index++) {
            let element = document.createElement('a');
            element.innerHTML = `<a class="topHeroes-block" id="heroe-${index}" href="detail.html?id=${index+1}">${topHeroes[index].name}</a>`
            dashboardHeroes.appendChild(element);
        }
    }
}

topHeroes(store);
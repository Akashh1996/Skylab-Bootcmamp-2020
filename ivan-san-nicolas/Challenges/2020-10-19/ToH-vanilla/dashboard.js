function topHeroes(store) {
    const topHeroes = store.getTopHeroes();
    const dashboardHeroes = document.getElementById('dashboardHeroes')
    for (i in topHeroes) {
        let element = document.createElement();
        element.innerHTML = `<a class="topHeroes-block" id="heroe-${i}" href="detail.html?id=${i+1}">${topHeroes[i].name}</a>`
        dashboardHeroes.appendChild(element);
    }
}

topHeroes(store);
function createHeroList() {
    const heroes = store.getTopHeroes();
    const heroList = document.getElementById('heroes')
    heroes.forEach(hero => {
        let heroCard = createHeroCard(hero)
        heroList.appendChild(heroCard)
    })
}

function createHeroCard(heroDetail) {
    const hero = document.createElement('div')
    hero.className = 'hero__card'
    const link = document.createElement('a')
    link.className = 'hero__link'
    link.href = `detail.html?id=${heroDetail.id}`
    link.innerHTML = heroDetail.name
    hero.appendChild(link)

    return hero
}
createHeroList()





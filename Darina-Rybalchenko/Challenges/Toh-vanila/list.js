function createHeroList() {
    const heroes = store.getHeroes();
    const heroList = document.getElementById('heroes')
    heroes.forEach(hero => {
        let heroCard = createHeroCard(hero.id, hero.name)
        heroList.appendChild(heroCard)
    })
}

function createHeroCard(heroId, heroName) {
    const hero = document.createElement('li')
    const heroIdSpan = document.createElement('span')
    const heroNameSpan = document.createElement('span')
    heroIdSpan.className = 'hero__list__element__id'
    heroNameSpan.className = 'hero__list__element__name'
    heroIdSpan.innerHTML = heroId
    heroNameSpan.innerHTML = heroName
    hero.appendChild(heroIdSpan)
    hero.appendChild(heroNameSpan)

    return hero
}
createHeroList()

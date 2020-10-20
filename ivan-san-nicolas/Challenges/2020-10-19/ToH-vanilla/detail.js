function getIdfromURL(location) {
    const locationSearch = location.search;
    let locationIdAndValue = locationSearch.slice(1, locationSearch.length);
    let separatedId = locationIdAndValue.split('=');
    let id = +separatedId[1];
    return heroesInfo(id, store);
}

function heroesInfo(id, store) {
    const actualHero = store.getHeroeById(id);
    document.getElementById('hero-detail-id').innerHTML = actualHero.id;
    document.getElementById('hero-detail-title').innerHTML = `${actualHero.name} details!`;
    document.getElementById('hero-detail-name').innerValue = actualHero.name;
    document.getElementById('hero-detail-intelligence').innerHTML = actualHero.powerstats.intelligence;
    document.getElementById('hero-detail-strength').innerHTML = actualHero.powerstats.strength;
    document.getElementById('hero-detail-speed').innerHTML = actualHero.powerstats.speed;
    document.getElementById('hero-detail-durability').innerHTML = actualHero.powerstats.durability;
}

function heroesInfo(id, store) {
    const actualHero = store.getHeroeById(id);
    const heroDetail = document.getElementById('hero-detail__info');
    for (property in actualHero) {
        if (typeof actualHero[property] !== 'object') {
            let element = document.createElement('div');
            element.innerHTML = `
            <div class="hero-detail__info__block">
                    <span class="hero-detail__info__block__property-name" id="hero-detail-property"></span>
                    <span class="hero-detail__info__block__property-value" id="hero-detail-value"></span>
                </div>
            `;
            heroDetail.appendChild(element);
            document.getElementById('hero-detail-property').innerHTML = actualHero[property];
            document.getElementById('hero-detail-value').innerHTML = acutalHero.property;
        } else if (typeof actualHero === 'object') {
            heroesInfo(id, store);
        }
    }
}

getIdfromURL(location);
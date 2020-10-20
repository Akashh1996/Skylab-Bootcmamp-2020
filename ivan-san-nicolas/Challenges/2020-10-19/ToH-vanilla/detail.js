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

getIdfromURL(location);
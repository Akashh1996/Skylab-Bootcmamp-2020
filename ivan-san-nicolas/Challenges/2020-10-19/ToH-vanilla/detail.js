function heroesInfo(store, id) {
    const actualHero = store.getHeroeById(id);
    document.getElementById('hero-detail-id').innerHTML = actualHero.id;
    document.getElementById('hero-detail-title').innerHTML = `${actualHero.name} details!`;
    document.getElementById('hero-detail-name').innerValue = actualHero.name;
    document.getElementById('hero-detail-intelligence').innerHTML = actualHero.powerstats.intelligence;
    document.getElementById('hero-detail-strength').innerHTML = actualHero.powerstats.strength;
    document.getElementById('hero-detail-speed').innerHTML = actualHero.powerstats.speed;
    document.getElementById('hero-detail-durability').innerHTML = actualHero.powerstats.durability;
}

heroesInfo(store, 2);
let locationId = getIdFromUrlParams(location.search);

(async () => {
    await store.loadPokemonsfromApiById(locationId)
    const poke = store.getPokemon()
    if (poke) {
        let detailName = document.getElementById('pokemon__name')
        let detailBaseExperience = document.getElementById('base__experience')
        detailName.innerHTML = `Name: ${poke.name}`
        detailBaseExperience.innerHTML = `Base experience: ${poke.base_experience}`
        let detailAbilities = document.getElementById('abilities')
        detailAbilities.innerHTML = 'Abilities: <br> '
        for (let i = 0; i < poke.abilities.length; i++) {
            let link = document.createElement('a')
            link.href = `./ability/ability.html?=${poke.abilities[i].ability.name}`
            link.innerHTML = poke.abilities[i].ability.name
            detailAbilities.appendChild(link)

        }
    } else {
        console.log('error')
    }

})()


function getIdFromUrlParams(locationSearch) {
    let locationSearchSplitted = locationSearch.split('=');
    let pokemonName = locationSearchSplitted[1];
    return pokemonName;
}


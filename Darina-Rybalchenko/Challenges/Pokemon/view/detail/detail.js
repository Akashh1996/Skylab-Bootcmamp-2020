let locationId = getIdFromUrlParams(location.search);

store.loadPokemonsfromApiById(locationId).then(() => {
    const poke = store.getPokemon()
    let detailName = document.getElementById('pokemon__name')
    let detailBaseExperience = document.getElementById('base__experience')
    detailName.innerHTML = poke.name
    detailBaseExperience.innerHTML = `Base experience: ${poke.base_experience}`
    let detailAbilities = document.getElementById('abilities')
    detailAbilities.innerHTML = 'Abilities: '
    for (let i = 0; i < poke.abilities.length; i++) {
        let link = document.createElement('a')
        link.href = `./ability/ability.html?=${poke.abilities[i].ability.name}`
        link.innerHTML = poke.abilities[i].ability.name
        detailAbilities.appendChild(link)

    }




    console.log(store.getPokemon())
})


function getIdFromUrlParams(locationSearch) {
    let locationSearchSplitted = locationSearch.split('=');
    let pokemonName = locationSearchSplitted[1];
    return pokemonName;
}


let abilityName = ablilName(window.location.search);

function ablilName(urlDetail) {
    let splitAbil = urlDetail.split('=')[1];
    return splitAbil;
}

function printAbility() {
    let textDiv = document.getElementById('textAb');
    let textAbility = document.createElement('text');
    textAbility.textContent = pokeStore.getAbility().effect_entries[1].effect;
    textDiv.appendChild(textAbility)
}

pokeStore.loadPokemonsFromAPIByAbility(abilityName).then(() => { printAbility() });
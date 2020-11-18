let locationId = getIdFromUrlParams(location.search)

store.loadAbilitiesfromApiById(locationId).then(() => {
    const ability = store.getAbility()
    console.log(ability)

})


function getIdFromUrlParams(locationSearch) {
    let locationSearchSplitted = locationSearch.split('=');
    let pokemonName = locationSearchSplitted[1];
    return pokemonName;
}
function detailList() {
    let locationId = getIdFromUrlParams(location.search)
    let hero = store.getHeroById(locationId)
    let detailTittle = document.getElementById('detail-title')
    let idElement = document.getElementById('hero-id__value')
    let nameElement = document.getElementById('hero-name__input')
    detailTittle.innerHTML = hero.name
    idElement.innerHTML = hero.id
    nameElement.value = hero.name
}
detailList()

function getIdFromUrlParams(locationSearch) {
    let locationSearchSplitted = locationSearch.split('=')
    let heroId = locationSearchSplitted[1]
    return +heroId
}





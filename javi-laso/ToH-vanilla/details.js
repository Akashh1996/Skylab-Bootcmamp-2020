function returnQuery() {
    let search = window.location.search;
    let title = document.getElementById('name-title');
    let id = search.split('=')[1];
    title.innerHTML = store.getHeroById(id)['name'] + ' details';
}

returnQuery();
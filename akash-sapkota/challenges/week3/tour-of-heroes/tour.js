function insertHeroes(store) {
    let dashboardName = store.getHeroes()
    for (let index = 0; index < dashboardName.length; index++) {

        document.getElementById(`heroes_id${index}`).innerHTML = dashboardName[index].id
        document.getElementById(`name_heroes_tour${index}`).innerHTML = dashboardName[index].name
        document.getElementById(`name_heroes_tour${index}`).href = `details.html?q=${dashboardName[index].id}`


    }
}

insertHeroes(store);;
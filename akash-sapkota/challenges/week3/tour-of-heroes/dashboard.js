function insertName(store) {
    let dashboardName = store.getTopHeroes()
    for (let index = 0; index < 4; index++) {

        document.getElementById(`heroes_name${index}`).innerHTML = dashboardName[index].name
        document.getElementById(`heroes_name${index}`).href = `details.html?q=${index+1}`

    }


}



insertName(store)
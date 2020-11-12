function insertId(store) {
    let dashboardName = store.getHeroes()
    let location = window.location.search
    let d = location[3]

    document.getElementById(`id_detail`).innerHTML = dashboardName[d].id
    document.getElementById(`name_detail`).innerHTML = dashboardName[d].name
    document.getElementById(`heading_name_detail`).innerHTML = dashboardName[d].name + " Details"

    console.log(d);

}

insertId(store)
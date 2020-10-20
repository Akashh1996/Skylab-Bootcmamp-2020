const { getHeroById } = require("./store");

function SuperheroDetail(superheroes) {
    let heroDetailContainer = document.getElementById('detail-heroes-container');
    let detailId = document.createElement('p');
    detailId.setAttribute('class', 'details-p');
    heroDetailContainer.appendChild(detailId);
    detailId.innerText = superheroes.id;  
    let detailName = document.createElement('p');
    detailName.setAttribute('class', 'details-p');
    heroDetailContainer.appendChild(detailName);
    detailName.innerHTML = superheroes.name;
}

// function detailHeroId(id) {
//     document.getElementById("id-heroe").innerHTML = id;
// }
// function detailHeroName(id) {
//     document.getElementById("name-hero").innerHTML = superheroes[id].name;
// }

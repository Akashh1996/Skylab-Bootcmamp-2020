
let pokeID = pokeId(window.location.search);

function pokeId(urlDetail) {
    let splitPoke = urlDetail.split('=')[1];
    return splitPoke;
}

function printPokemonDetails() {
    let sectionPres = document.getElementById("boxPres")
    let pictPresentation = document.createElement("img")
    let imgPoke = pokeStore.getPokemon().sprites.back_default;
    pictPresentation.setAttribute("src", imgPoke)
    let boxPresentation = document.createElement("div")
    boxPresentation.setAttribute("class","boxPres__div")
    let namePoke = document.createElement('h1')
    namePoke.setAttribute("class","titleName")
    namePoke.textContent = pokeStore.getPokemon().name;
    let pokeIdHeightWeight = document.createElement('p')
    pokeIdHeightWeight.setAttribute("class","idHeightWeight");
    pokeIdHeightWeight.textContent = `Pokemon ID : ${pokeStore.getPokemon().id} \r\nPokemon height : ${pokeStore.getPokemon().height} \r\nPokemon weight : ${pokeStore.getPokemon().weight}`
    let abilitiesSect = document.createElement('h3')
    abilitiesSect.textContent = "Abilities"
    abilitiesSect.setAttribute("class","abilitiesSect")
    pokeStore.getPokemon().abilities.forEach((obj) => {
        let abilitiS = obj.ability.name
        let AbLink = `./ability.html?pokemon=${abilitiS}`
        let buttonAb = document.createElement('button')
        let anchorAb = document.createElement('a')
        anchorAb.textContent = abilitiS;
        anchorAb.setAttribute("href", AbLink);
        anchorAb.setAttribute("class", "anchorStyle");
        buttonAb.setAttribute("class", "btnPokedex");
        buttonAb.appendChild(anchorAb)
        abilitiesSect.appendChild(buttonAb)
    })
    let movebox = document.createElement('div')
    movebox.setAttribute("class","containerDiv")
    let movetitle = document.createElement('h3')
    movetitle.setAttribute("class","abilitiesSect")
    movetitle.textContent = "Moves "
    movebox.appendChild(movetitle)
    let divTextMoves = document.createElement('div')
    divTextMoves.setAttribute("class","containerDivtext")
    movebox.appendChild(divTextMoves)
    pokeStore.getPokemon().moves.forEach((obj)=> {
        let onemove = document.createElement('div');
        onemove.textContent = `${obj.move.name} - `;
        divTextMoves.appendChild(onemove);
    })
    
    boxPresentation.appendChild(namePoke)
    boxPresentation.appendChild(pokeIdHeightWeight)
    sectionPres.appendChild(pictPresentation)
    sectionPres.appendChild(boxPresentation)
    sectionPres.appendChild(abilitiesSect)
    sectionPres.appendChild(movebox)
    document.body.appendChild(sectionPres)
}

pokeStore.loadPokemonsFromAPIByID(pokeID).then(() => { printPokemonDetails()});
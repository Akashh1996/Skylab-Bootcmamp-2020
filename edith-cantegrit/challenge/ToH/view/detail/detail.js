const heroId = getHeroId(location);
const hero = store.getHeroById(heroId);

function printHero() {

    document.getElementById("heroesDetail").innerHTML = ""
    let divHeader = document.createElement('div')
    divHeader.setAttribute("class","divHeader")
        let imageHero = document.createElement('img')
        imageHero.setAttribute("src", hero.images.sm)
        let nameAndAppearance = document.createElement('div')
        nameAndAppearance.setAttribute("class","nameAndAppearance")
            let nameHero = document.createElement('h1')
            nameHero.textContent = hero.name;
            let appearanceHero = document.createElement('h4')
            appearanceHero.setAttribute("style","white-space: pre;")
            appearanceHero.textContent = `Gender : ${hero.appearance.gender} \r\nColor of the eyes : ${hero.appearance.eyeColor}\r\nColor of the hair : ${hero.appearance.hairColor}\r\nHeight : ${hero.appearance.height[1]}\r\nRace : ${hero.appearance.race}\r\nWeigth : ${hero.appearance.weight[1]}` ;
    let workDetails = document.createElement("section");
    workDetails.textContent = hero.work.occupation;
    let titleBio = document.createElement("h4");
    titleBio.textContent = `Biography : `;
    titleBio.setAttribute("class","titlebio")
    let biography = document.createElement("section");
    biography.setAttribute("class","bioStyle");
    biography.setAttribute("style","white-space: pre");
    biography.textContent = `Alignment : ${hero.biography.alignment} \r\nAlterEgos : ${hero.biography.alterEgos} \r\nFirst Appearance : ${hero.biography.firstAppearance} \r\nFull Name : ${hero.biography.fullName}
\r\nPlace of Birth : ${hero.biography.placeOfBirth} \r\nPublisher :  ${hero.biography.publisher}`
    let connectionHero = document.createElement("section");
    connectionHero.textContent = `Group affiliation : ${hero.connections.groupAffiliation}. \r\nRelatives :  ${hero.connections.relatives}`;
    connectionHero.setAttribute("style","white-space: pre; margin: 30px 10px;")
    let powerStats = document.createElement("section");
    powerStats.setAttribute("class","statisticsBlock")
    

    document.getElementById("heroesDetail").appendChild(divHeader)
    divHeader.appendChild(imageHero)
    divHeader.appendChild(nameAndAppearance)
    nameAndAppearance.appendChild(nameHero)
    nameAndAppearance.appendChild(workDetails)
    nameAndAppearance.appendChild(appearanceHero)
    titleBio.appendChild(biography)
    divHeader.appendChild(titleBio)
    document.getElementById("heroesDetail").appendChild(connectionHero)
    document.getElementById("heroesDetail").appendChild(powerStats)
    powerStats.appendChild(gauge)

    
    
}

printHero();

console.log(hero)

module.exports = DetailComponent;

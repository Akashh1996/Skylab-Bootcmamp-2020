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
    // hero.powerstats.forEach(function(stat){
    //     let gauge = document.createElement("div");
    //     gauge.setAttribute("class","powerstats")
    //     gauge.setAttribute("id","intelligence")
    //     let gaugeSvg = document.createElement("svg")
    //     gaugeSvg.setAttribute("style","height=100 width=100")
    //     let gaugecircle = document.createElement("circle")
    //     gaugecircle.setAttribute("style","cx=50 cy=50 r=37")
    //     let gaugecircle2 = document.createElement("circle")
    //     gaugecircle2.setAttribute("style","cx=50 cy=50 r=37")
    //     let spanName = document.createElement("svg");
    //     let spanNum = document.createElement("svg");
    //     spanName.setAttribute("class","powerstats__name")
    //     spanNum.setAttribute("class","powerstats__number")
    //     spanNum.setAttribute("id","intelligence-number")
    //     gauge.appendChild(gaugeSvg)
    //     gaugeSvg.appendChild(gaugecircle)
    //     gaugeSvg.appendChild(gaugecircle2)
    //     gauge.appendChild(spanName)
    //     gauge.appendChild(spanNum)
    //     getDashOffSetfromPercent(gaugecircle2, stat.intelligence) {
    //         let radius = circle.getAttribute('r');
    //         let circumference = Math.PI * radius * 2;
    //         percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
    //         let dashOffSet = circumference - percent / 100 * circumference;
    //         return dashOffSet;
    //     }
    //     setstrokeDashoffsetInCircle(circle, percent) {
    //         circle.style.strokeDashoffset = this.getDashOffSetfromPercent(circle, percent);
    //     }
    // });
    

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

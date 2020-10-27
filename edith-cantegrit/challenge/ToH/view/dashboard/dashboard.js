
function printDashboard() {
    document.getElementById("heroesList").innerHTML = ""
    var headerTop = document.createElement('lh')
    headerTop.textContent = "Top Heroes"
    headerTop.setAttribute("class","titleSection");
    var block = document.createElement('div');
    block.setAttribute("class","sectionDiv");
    store.getTopHeroes().forEach(function (obj) {
        let heroId = obj.id.toString()
        let heroLink = "../detail/detail.html?heroId=" + heroId;
        var numHero = document.createElement('button');
        var anchorHero = document.createElement('a');
        numHero.setAttribute("class","boxHero");
        anchorHero.setAttribute("href", heroLink)
        anchorHero.setAttribute("class","anchors")
        anchorHero.textContent = obj.name;
        block.appendChild(numHero);
        numHero.appendChild(anchorHero)
    });
    headerTop.appendChild(block);
    document.getElementById("heroesList").appendChild(headerTop)
}

printDashboard();



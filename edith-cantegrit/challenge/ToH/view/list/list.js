
function printList() {
    document.getElementById("heroesList").innerHTML = ""
    var listheader = document.createElement('lh')
    listheader.textContent = "My Heroes"
    listheader.setAttribute("class","titleSection");
    var list = document.createElement('ul');
    list.style.listStyleType = "none";
    store.getHeroes().forEach(function (obj) {
        let heroId = obj.id.toString()
        let heroLink = "../detail/detail.html?heroId=" + heroId;
        var divHero = document.createElement('div');
        divHero.setAttribute("class","buttonHero");
        var numHero = document.createElement('button');
        var anchorHero = document.createElement('a');
        numHero.setAttribute("class","idHero");
        numHero.textContent = obj.id; 
        anchorHero.setAttribute("href", heroLink)
        anchorHero.setAttribute("class", "nameHero")
        anchorHero.textContent = obj.name;
        divHero.appendChild(numHero)
        list.appendChild(divHero);
        divHero.appendChild(anchorHero)
    });
    listheader.appendChild(list);
    document.getElementById("heroesList").appendChild(listheader)
}

printList();
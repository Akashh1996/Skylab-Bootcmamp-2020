let topHeroes = store.getTopHeroes();

const topButtonHeroes = document.getElementById("buttons");

function makeTopHeroes(array) {
  for (let i = 0; i < array.length; i++) {
    let cell = document.createElement("button");
    topButtonHeroes.appendChild(cell).className = "section__button";
    cell.innerHTML = array[i].name
  };
};

makeTopHeroes(topHeroes);
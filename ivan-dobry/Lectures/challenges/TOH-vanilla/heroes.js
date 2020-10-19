let heroes = store.getHeroes();

const heroesList = document.getElementById("heroes-list");

function makeList(array) {
  for (let i = 0; i < array.length; i++) {
    let cell = document.createElement("li");
    heroesList.appendChild(cell).className = "heroes__list";
    cell.innerHTML = array[i].id + '&nbsp' + '&nbsp' + '&nbsp' + array[i].name
  };
};

makeList(heroes);
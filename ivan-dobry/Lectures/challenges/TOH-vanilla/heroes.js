store.loadHeroes().then(() => {

let heroes = store.getHeroes();

const heroesList = document.getElementById("heroes-list");


  function makeList(array) {
    for (let i = 0; i < array.length; i++) {
      let cell = document.createElement("a");
      heroesList.appendChild(cell).className = "heroes__list";
      if (array[i].id !== i +1) {
        i++;
      }
      cell.innerHTML = array[i].id + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + array[i].name
      cell.href=`details.html?heroId=${i + 1}`
    };
  };
  
  makeList(heroes);

})

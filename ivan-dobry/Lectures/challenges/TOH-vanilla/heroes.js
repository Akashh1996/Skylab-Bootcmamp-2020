store.loadHeroes().then(() => {

let heroes = store.getHeroes();

const heroesList = document.getElementById("heroes-list");


  function makeList(array) {
    let index= 0;
    for (let i = 0; i < array.length; i++) {
      debugger;
      if (array[index].id === i +1) {
      let cell = document.createElement("a");
      heroesList.appendChild(cell).className = "heroes__list";
      cell.innerHTML = array[index].id + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + array[index].name;
      cell.href=`details.html?heroId=${i + 1}`;
      index++;
    }
    };
  };
  
  makeList(heroes);

})

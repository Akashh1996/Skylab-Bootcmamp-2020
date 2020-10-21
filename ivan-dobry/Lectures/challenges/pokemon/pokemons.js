store.loadPokemons().then(() => {

    let pokemons = store.getPokemons();
    
    const pokemonList = document.getElementById("pokemons-list");
    
  
      function makeList(array) {
        debugger
        for (let i = 0; i < array.length; i++) {
          let cell = document.createElement("a");
          pokemonList.appendChild(cell).className = "pokemons__list";
          cell.innerHTML = array[i].name
          //cell.href=`details.html?heroId=${i + 1}`;

        };
      };
      
      makeList(pokemons);
    
})
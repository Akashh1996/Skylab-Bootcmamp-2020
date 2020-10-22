let startNumber = 0;
let quantity = 30;

const listContainer = document.getElementById('pokemon-list');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');

(async () => {
    await store.loadPokedex(quantity, startNumber);
    pokedex = store.getPokemonList();
    for (let index = 0; index < pokedex.results.length; index++) {
        store.createListElement(listContainer, pokedex.results, index);
    }
})()

previousBtn.addEventListener('click', async () => {
    startNumber = startNumber - quantity < 0 ? 0 : startNumber - quantity;

    await store.loadPokedex(quantity, startNumber);
    listContainer.innerHTML = '';
    pokedex = store.getPokemonList();
    for (let index = 0; index < pokedex.results.length; index++) {
        store.createListElement(listContainer, pokedex.results, index);
    }
})

nextBtn.addEventListener('click', async () => {
    startNumber = startNumber + quantity > 1050 ? 1050 : startNumber + quantity;

    await store.loadPokedex(quantity, startNumber)
    listContainer.innerHTML = '';
    pokedex = store.getPokemonList();
    for (let index = 0; index < pokedex.results.length; index++) {
        store.createListElement(listContainer, pokedex.results, index);
    }
})
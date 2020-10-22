const backBtn = document.getElementById('back');
const idInput = document.getElementById('id-input');
const pokemonImg = document.getElementById('pokemon-img');
const nameInput = document.getElementById('name-input');
const weightInput = document.getElementById('weight-input');
const typesContainer = document.getElementById('types');
const abilitiesContainer = document.getElementById('abilities');
const movesContainer = document.getElementById('moves');
const statsNumber = document.querySelectorAll('.stats__number');
const circles = document.querySelectorAll('.circle');

const url = window.location.search;
const name = store.getNameFromSearch(url);

backBtn.addEventListener('click', () => {
    window.location = '../Pokemon-list/list.html';
})

const pok = store.loadPokemonByName(name).then(() => {
    let pokemon = store.getPokemon();
    pokemonImg.setAttribute('src', `${pokemon.sprites.other.dream_world.front_default}`);
    store.updateValueHtml(idInput, 'innerHTML', pokemon.id);
    store.updateValueHtml(weightInput, 'innerHTML', `${pokemon.weight} kg`);
    store.updateValueHtml(nameInput, 'innerHTML', pokemon.name);

    for (let index = 0; index < pokemon.types.length; index++){
        store.createGroupElement(typesContainer, pokemon.types, 'type',index);
    }

    for (let index = 0; index < pokemon.abilities.length; index++){
        store.createGroupElement(abilitiesContainer, pokemon.abilities, 'ability',index);
    }

    for (let index = 0; index < pokemon.moves.length; index++) {
        store.createGroupElement(movesContainer, pokemon.moves, 'move', index);
    } 
    
    for (let circleIndex = 0; circleIndex < circles.length; circleIndex++) {
        store.updateValueHtml(statsNumber[circleIndex], 'innerHTML', pokemon.stats[circleIndex]['base_stat']);
        store.setStrokeDashoffsetInCircle(circles[circleIndex], pokemon.stats[circleIndex]['base_stat'], 200);
        store.setStrokeDasharrayInCircle(circles[circleIndex], pokemon.stats[circleIndex]['base_stat'], 200);
    }
});
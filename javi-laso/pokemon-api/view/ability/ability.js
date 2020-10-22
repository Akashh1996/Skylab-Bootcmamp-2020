const backBtn = document.getElementById('back');
const nameTitle = document.getElementById('name-title');
const idInput = document.getElementById('id-input');
const descriptionInput = document.getElementById('description-input');
const pokemonsContainer = document.getElementById('pokemons-container');

const url = window.location.search;
const name = store.getElementFromSearch(url, 'abilityName');

backBtn.addEventListener('click', () => {
    window.location = `../Details/details.html?pokemonName=${store.getElementFromSearch(url, 'pokemonName')}`;
})

store.loadPokemonAbilityByName(name).then(() => {
    const ability = store.getPokemonAbility();
    store.updateValueHtml(nameTitle, 'innerHTML', ability.name);
    store.updateValueHtml(idInput, 'innerHTML', ability.id);
    store.updateValueHtml(descriptionInput, 'innerHTML', store.getDescriptionAbilityByLanguage('en'));
    
    for (let index = 0; index < ability.pokemon.length; index++) {
        store.addToInnerHtml(
            pokemonsContainer,
            `<a href="" class="capitalize">${ability.pokemon[index].pokemon.name}</a>`
        );
    }
    
});
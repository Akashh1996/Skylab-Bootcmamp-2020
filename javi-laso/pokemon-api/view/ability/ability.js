const backBtn = document.getElementById('back');
const nameTitle = document.getElementById('name-title');
const idInput = document.getElementById('id-input');
const descriptionInput = document.getElementById('description-input');
const pokemonsContainer = document.getElementById('pokemon-list');

const url = window.location.search;
const name = store.getElementFromSearch(url, 'abilityName');

backBtn.addEventListener('click', () => {
    window.location = `../Details/details.html?pokemonName=${store.getElementFromSearch(url, 'pokemonName')}`;
});

(async () => {
    await store.loadPokemonAbilityByName(name);
    const ability = store.getPokemonAbility();
    store.updateValueHtml(nameTitle, 'innerHTML', ability.name);
    store.updateValueHtml(idInput, 'innerHTML', ability.id);
    store.updateValueHtml(descriptionInput, 'innerHTML', store.getDescriptionAbilityByLanguage('en'));
    
    for (let index = 0; index < ability.pokemon.length; index++) {
        store.addToInnerHtml(
            pokemonsContainer,
            `<li><a href="../Details/details.html?pokemonName=${ability.pokemon[index].pokemon.name}" class="capitalize">${ability.pokemon[index].pokemon.name}</a></li>`
        );
    }
})()
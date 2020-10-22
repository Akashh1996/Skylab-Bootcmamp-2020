const backBtn = document.getElementById('back');
const nameTitle = document.getElementById('name-title');
const idInput = document.getElementById('id-input');
const descriptionInput = document.getElementById('description-input');

const url = window.location.search;
const name = store.getNameFromSearch(url);

backBtn.addEventListener('click', () => {
    window.location = `../Details/details.html?name=${store.getElementFromSearch(url, 'pokemonName')}`;
})

store.loadPokemonAbilityByName(name).then(() => {
    const ability = store.getPokemonAbility();
    store.updateValueHtml(nameTitle, 'innerHTML', ability.name);
    store.updateValueHtml(idInput, 'innerHTML', ability.id);
    store.updateValueHtml(descriptionInput, 'innerHTML', store.getDescriptionAbilityByLanguage('en'));
});
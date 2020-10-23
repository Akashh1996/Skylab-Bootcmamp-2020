const { loadPokemons } = require('./poke-store');
const pokedex = require('./poke-store');

describe('poke-store', () => {
    test('should create', () => {
        expect(loadPokemons).toBeDefined();
    })
})


describe('getPokemons', () => {
    test('should call getPokemons and return an array of Pokemon', ()=>{
        //arrange
        //act
        let response = pokedex.getPokemons().results;
        //assert
        expect(response).toEqual([{name: "", url:""}]);
    })
})

describe('getPokemonNum', () => {
    test('should call getPokemonNum and return the number of the Pokemon', ()=>{
        //arrange
        let pokemonInList = {url: "https://pokeapi.co/api/v2/pokemon/201/"}
        //act
        let response = pokedex.getPokemonNum(pokemonInList);
        //assert
        expect(response).toEqual("201");
    })
})

describe('pokemonDetailTitle', () => {
    test('should call pokemonDetailTitle and return pokemon number and name', ()=>{
        //arrange
        let pokemonId=1;
        let pokemonName="bulbasaur";
        //act
        let response = pokedex.pokemonDetailTitle(pokemonId,pokemonName);
        //assert
        expect(response).toEqual(`#1: bulbasaur`);
    })
})

describe('setPokemonImage', () => {
    test('should call setPokemonImage and return a string', ()=>{
        //arrange
        //act
        let response = pokedex.setPokemonImage();
        //assert
        expect(response).toEqual(`<img src="..." alt="pokemon-image-img">`);
    })
})


describe('setAbilitiesList', () => {
    test('should call setAbilitiesList and return a string', ()=>{
        //arrange
        //act
        let response = pokedex.setAbilitiesList();
        //assert
        expect(response).toBe('<a href="./../ability/ability.html?ability="><li class="abilityLi"></li></a>');
    })
})

describe('setListOfPokemon', () => {
    test('should call setListOfPokemon and return a string', ()=>{
        //arrange
        //act
        let response = pokedex.setListOfPokemons();
        //assert
        expect(response).toEqual(`<a href="./../detail/detail.html?n=&name=">
            <li class="liElement"><b>n.º</b> </li></a>`);
    })
})


describe('backAndNextButtons', () => {
    test('should call backAndNextButtons with page = 0 and return a string', ()=>{
        //arrange
        let page = 0;
        //act
        let response = pokedex.backAndNextButtons(page);
        //assert
        expect(response).toEqual("<a href=\"./list.html?page=1\" id=\"next-button\">Next ></a>");
    })

    test('should call backAndNextButtons with page = 1 and return a string', ()=>{
        //arrange
        let page = 1;
        //act
        let response = pokedex.backAndNextButtons(page);
        //assert
        expect(response).toEqual(`<a href="./list.html?page=0" id="back-button">< Back</a><a href="./list.html?page=2" id="next-button">Next ></a>`);
    })
})

describe('getAbilityDescription', () => {
    test('should call getAbilityDescription and return a string', ()=>{
        //arrange
        //act
        let response = pokedex.getAbilityDescription();
        //assert
        expect(response).toEqual(``);
    })
})

describe('async functions', () => {
    beforeEach(()=>{
        const json = jest.fn().mockReturnValueOnce([]);
        const fetchImplementation = () => {return Promise.resolve({json: json})};
        global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);
    })

    test('loadPokemons should load a list of pokemon from an api', ()=>{
        return pokedex.loadPokemons(1).then(() => {
        expect(pokedex.getPokemons()).toEqual([]);
        })
    })

    test('loadPokemonsFromAPIById should load a pokemon from an api', ()=>{
        return pokedex.loadPokemonsFromAPIById(0).then(() => {
        expect(pokedex.getPokemon()).toEqual([]);
        })
    })

    test('loadAbilityFromAPI should load an ability from an api', ()=>{
        return pokedex.loadAbilityFromAPI(0).then(() => {
        expect(pokedex.getAbilityObj()).toEqual([]);
        })
    })
})

describe('async functions', () => {
    beforeEach(()=>{
        const json = jest.fn().mockReturnValueOnce([]);
        const fetchImplementation = () => {return Promise.reject()};
        global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);
    })

    test('loadPokemons should load a list of pokemon from an api', ()=>{
        return pokedex.loadPokemons(1).then(() => {
        expect(pokedex.getPokemons().results).toBe(null);
        })
    })

    test('loadPokemonsFromAPIById should load a pokemon from an api', ()=>{
        return pokedex.loadPokemonsFromAPIById(0).then(() => {
        expect(pokedex.getPokemon()).toBe(null)
        })
    })

    test('loadAbilityFromAPI should load an ability from an api', ()=>{
        return pokedex.loadAbilityFromAPI(0).then(() => {
        expect(pokedex.getAbilityObj()).toBe(null)
        })
    })
})




/* test('should load one pokemon details from api', () => {
    const json = jest.fn().mockReturnValueOnce({ id: 12, name: 'Narco'});
    const fetchImplementation = () => {Promise.resolve({json: json})};
    global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);
    return store.loadPokemonsFromAPIById(12).then(() => {
        expect(store.getPokemon()).toEqual({ id: 12, name: 'Narco' });
    })
}) */
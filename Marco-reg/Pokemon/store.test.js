
const PokeStore = require('./store');

describe('poke Store',(()=>{
	let store;
	beforeEach(()=>{
		store= new PokeStore();
	});
	test('should be defined',()=>{
		expect(store).toBeDefined();
	});
	test('should return a array of pokemons',()=>{
		expect(store.getPokemons()).toEqual([]);
	});
	test('should return single pokemon',()=>{
		expect(store.getPokemon()).toEqual(undefined);
	});
	test('should load pokemons from api',()=>{
		const response={
			json:jest.fn().mockReturnValueOnce([{id:12,name:'Narco'}])};
		global.fetch=jest
		.fn().mockImplementationOnce(()=> Promise.resolve(response));
		return store.loadPokemonsFromAPI().then(()=>{
			expect(store.getPokemons()).toEqual([{id:12,name:'Narco'}]);
		});
	});
	test('should load one pokemons details from api',()=>{
		const json=jest.fn().mockReturnValueOnce({id:12,name:'Narco'})
		const fetchImplementation=()=>Promise.resolve({json:json})
		global.fetch=jest.fn().mockImplementationOnce(fetchImplementation)
		return store.loadPokemonsFromAPIbyId(12).then(()=>{
			expect(store.getPokemon()).toEqual({id:12,name:'Narco'})
		});
	});
})
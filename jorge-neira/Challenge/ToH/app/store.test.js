const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
	});
	describe('getHeroes', () => {
		test('should call getHeroes and return an array of heroes', () => {
			expect(store.getHeroes()).toEqual([
				{ id: 11, name: 'Dr Nice' },
				{ id: 12, name: 'Narco' },
				{ id: 13, name: 'Bombasto' },
				{ id: 14, name: 'Celeritas' },
				{ id: 15, name: 'Magneta' },
				{ id: 16, name: 'RubberMan' },
				{ id: 17, name: 'Dynama' },
				{ id: 18, name: 'Dr IQ' },
				{ id: 19, name: 'Magma' },
				{ id: 20, name: 'Tornado' }
			]);
		});
	});
	describe('getHeroeById', () => {
		test('should call getHeroById and return one hero', () => {
			expect(store.getheroById(12)).toEqual({ id: 12, name: 'Narco' });
		});
	});
	describe('getTopHeroes', () => {
		test('shoud get top 5 heroes of the list', () => {
			expect(store.getTopHeroes()).toEqual([
				{ id: 12, name: 'Narco' },
				{ id: 13, name: 'Bombasto' },
				{ id: 14, name: 'Celeritas' },
				{ id: 15, name: 'Magneta' }
			]);
		});
	});
});

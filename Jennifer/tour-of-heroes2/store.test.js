const { TestScheduler } = require('jest');
const store = require('./store');
/*
describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
	});
	describe('getHeroes', () => {
		test('', () => {
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
	describe('getHeroById', () => {
		test('', () => {
			expect(store.getHeroById(12)).toEqual({ id: 12, name: 'Narco' });
		});
	});
	describe('getTopHeroes', () => {
		test('', () => {
			expect(store.getTopHeroes()).toEqual([
				{ id: 12, name: 'Narco' },
				{ id: 13, name: 'Bombasto' },
				{ id: 14, name: 'Celeritas' },
				{ id: 15, name: 'Magneta' }
			]);
		});
	});
});
*/

describe('heroesStore', () => {
	test('should return a promise', (done) => {
		global.fetch = jest.fn().mockImplementationOnce(() =>
			Promise.resolve({
				json: jest.fn().mockReturnValueOnce([{ id: 12, name: 'Narco' }])
			})
		);
		return store.loadHeroes().then((response) => {
			expect(response).toEqual([]);
		});
	});

	test.only('should return 4 heroes', () => {
		store.loadHeroes();
		let topHeroes = store.getTopHeroes();
		let expectValue = [
			{ id: 11, name: 'Dr Nice' },
			{ id: 12, name: 'Narco' },
			{ id: 13, name: 'Bombasto' },
			{ id: 14, name: 'Celeritas' }
		];
		expect(topHeroes).toEqual(expectValue);
	});
});

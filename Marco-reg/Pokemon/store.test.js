const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
	});
	test("should return a promise",()=>{
		global.fetch=jest.fn().mockImplementationOnce(()=>{
			Promise.resolve({
				json:fn().mockReturnValueOnce
			})
		})
	})

	
});

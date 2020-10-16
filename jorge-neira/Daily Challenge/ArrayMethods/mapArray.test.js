const { myProtos } = require('./ownArrayMethods');

describe('Test ArrayMethods using __proto__', () => {
	test('Should return doubles', () => {
		//arrange
		const a = {
			0: 25,
			1: 13,
			2: 234,
			3: 2,
			4: 90,
			5: 36,
			length: 6,
			__proto__: myProtos
		};
		//act
		const response = a.myMap(a, (x) => {
			return x * 2;
		});
		//assert
		expect(response).toStrictEqual({
			0: 50,
			1: 26,
			2: 468,
			3: 4,
			4: 180,
			5: 72,
			length: 6
		});
	});
	test('Should return all the elements that pass the condition', () => {
		//arrange
		const a = {
			0: 'spray',
			1: 'limit',
			2: 'elite',
			3: 'exuberant',
			4: 'destruction',
			5: 'present',
			length: 6,
			__proto__: myProtos
		};
		//act
		const response = a.myFilter(a, (word) => word.length > 6);
		//assert
		expect(response).toStrictEqual({
			0: 'exuberant',
			1: 'destruction',
			2: 'present',
			length: 3
		});
	});
	test('Should return the first element that satisfies the provided test', () => {
		//arrange
		const a = {
			0: 'spray',
			1: 'limit',
			2: 'elite',
			3: 'exuberant',
			4: 'destruction',
			5: 'present',
			length: 6,
			__proto__: myProtos
		};
		//act
		const response = a.myFind(a, (element) => element === 'destruction');
		//assert
		expect(response).toStrictEqual({
			0: 'destruction',
			length: 1
		});
	});
	xtest('Should return undefined since there is no match', () => {
		//arrange
		const a = {
			0: 'spray',
			1: 'limit',
			2: 'elite',
			3: 'exuberant',
			4: 'destruction',
			5: 'present',
			length: 6
		};
		//act
		const response = myJestTest.myFind(a, (element) => element === 'nomatch');
		//assert
		expect(response).toBeUndefined();
	});
	xtest('Should return the index of the first match ', () => {
		//arrange
		const a = {
			0: '25',
			1: '41',
			2: '10',
			3: '5',
			4: '34',
			5: '70',
			length: 6
		};
		//act
		const response = myJestTest.myFindIndex(a, (element) => element > 41);
		//assert
		expect(response).toStrictEqual({ 0: 5, length: 1 });
	});
});

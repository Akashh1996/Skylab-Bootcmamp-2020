'use strict';

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
	test('Should return undefined since there is no match', () => {
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
		const response = a.myFind(a, (element) => element === 'nomatch');
		//assert
		expect(response).toBeUndefined();
	});
	test('Should return the index of the first match ', () => {
		//arrange
		const a = {
			0: '25',
			1: '41',
			2: '10',
			3: '5',
			4: '34',
			5: '70',
			length: 6,
			__proto__: myProtos
		};
		//act
		const response = a.myFindIndex(a, (element) => element > 41);
		//assert
		expect(response).toStrictEqual('5');
	});
	test('Should return -1 since index of condition is not met ', () => {
		//arrange
		const a = {
			0: '25',
			1: '41',
			2: '10',
			3: '5',
			4: '34',
			5: '70',
			length: 6,
			__proto__: myProtos
		};
		//act
		const response = a.myFindIndex(a, (element) => element > 421);
		//assert
		expect(response).toStrictEqual('-1');
	});
	test('Should fill the array with the cur value ', () => {
		//arrange
		const a = {
			0: 1,
			1: 2,
			2: 3,
			length: 3,
			__proto__: myProtos
		};
		const b = {
			0: 1,
			1: 2,
			2: 3,
			length: 3,
			__proto__: myProtos
		};
		const c = {
			0: 1,
			1: 2,
			2: 3,
			length: 3,
			__proto__: myProtos
		};
		const d = {
			0: 1,
			1: 2,
			2: 3,
			length: 3,
			__proto__: myProtos
		};
		const e = {
			0: 1,
			1: 2,
			2: 3,
			length: 3,
			__proto__: myProtos
		};
		//act
		const response1 = a.myFill(a, 4, 1, 2);
		const response2 = b.myFill(b, 4, 1, 1);
		const response3 = c.myFill(c, 4, 3, 3);
		const response4 = d.myFill(d, 4, -3, -2);
		const response5 = e.myFill(e, 4);
		//assert
		expect(response1).toStrictEqual({
			0: 1,
			1: 4,
			2: 3,
			length: 3
		});
		expect(response2).toStrictEqual({
			0: 1,
			1: 2,
			2: 3,
			length: 3
		});
		expect(response3).toStrictEqual({
			0: 1,
			1: 2,
			2: 3,
			length: 3
		});
		expect(response4).toStrictEqual({
			0: 4,
			1: 2,
			2: 3,
			length: 3
		});

		expect(response5).toStrictEqual({
			0: 4,
			1: 4,
			2: 4,
			length: 3
		});
	});
});

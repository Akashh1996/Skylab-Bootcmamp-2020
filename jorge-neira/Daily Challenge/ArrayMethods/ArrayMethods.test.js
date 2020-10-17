'use strict';

const { myProtos } = require('./ownArrayMethods');

describe('Test ArrayMethods using __proto__', () => {
	test('myMap Should return doubles', () => {
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
	test('myFilter Should return all the elements that pass the condition', () => {
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
	test('myFind Should return the first element that satisfies the provided test', () => {
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
	test('myFind Should return undefined since there is no match', () => {
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
	test('myFindIndex Should return the index of the first match ', () => {
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
	test('myFindIndex Should return -1 since index of condition is not met ', () => {
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
	test('myFill Should fill the array with the cur value ', () => {
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
		const f = {
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
		const response6 = f.myFill(f, 4, 1);
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
		expect(response6).toStrictEqual({
			0: 1,
			1: 4,
			2: 4,
			length: 3
		});
	});
	test('myCopyWithin Should return shallow copies parts of my array ', () => {
		//arrange
		const a = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5, __proto__: myProtos };
		const b = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5, __proto__: myProtos };
		const c = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5, __proto__: myProtos };
		const d = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5, __proto__: myProtos };
		//act
		const response1 = a.myCopyWithin(a, -2);
		const response2 = b.myCopyWithin(b, 0, 3);
		const response3 = c.myCopyWithin(c, 0, 3, 4);
		const response4 = d.myCopyWithin(d, -2, -3, -1);
		//assert
		expect(response1).toStrictEqual({
			0: 1,
			1: 2,
			2: 3,
			3: 1,
			4: 2,
			length: 5
		});
		expect(response2).toStrictEqual({
			0: 4,
			1: 5,
			2: 3,
			3: 4,
			4: 5,
			length: 5
		});
		expect(response3).toStrictEqual({
			0: 4,
			1: 2,
			2: 3,
			3: 4,
			4: 5,
			length: 5
		});
		expect(response4).toStrictEqual({
			0: 1,
			1: 2,
			2: 3,
			3: 3,
			4: 4,
			length: 5
		});
	});
	test('mySome Should return true or false if one items match with the function', () => {
		//arrange
		const a = {
			0: 28,
			1: 8,
			2: 22,
			3: 34,
			4: 12,
			5: 56,
			6: 75,
			7: 9,
			length: 8,
			__proto__: myProtos
		};
		//act
		const response = a.mySome(a, (element) => element > 50);
		//assert
		expect(response).toBeTruthy();
	});
	test('myEvery Should return false since not all items pass the condition ', () => {
		//arrange
		const a = {
			0: 28,
			1: 8,
			2: 22,
			3: 34,
			4: 12,
			5: 56,
			6: 75,
			7: 9,
			length: 8,
			__proto__: myProtos
		};
		//act
		const response = a.myEvery(a, (element) => element > 99);
		//assert
		expect(response).toBeFalsy();
	});
	test('myReduce Should return the sum off all index', () => {
		//arrange
		const reducer = (acc, cur) => acc + cur;
		const a = {
			0: 28,
			1: 8,
			2: 22,
			3: 34,
			4: 12,
			5: 56,
			6: 75,
			7: 10,
			length: 8,
			__proto__: myProtos
		};
		//act
		const response = a.myReduce(a, reducer);
		//assert
		expect(response).toBe(245);
	});
	test('myReduce Should return the sum off all index + de initial value', () => {
		//arrange
		const reducer = (acc, cur) => acc + cur;
		const a = {
			0: 28,
			1: 8,
			2: 22,
			3: 34,
			4: 12,
			5: 56,
			6: 75,
			7: 10,
			length: 8,
			__proto__: myProtos
		};
		//act
		const response = a.myReduce(a, reducer, 100);
		//assert
		expect(response).toBe(345);
	});
});

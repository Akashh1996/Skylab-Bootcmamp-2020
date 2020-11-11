const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

const data = {
	name: 'Narco',
	lastName: 'Traficante',
	driving: 'VW polo',
	age: 34
};

const { name, lastName, ...person } = data;

console.log(person);

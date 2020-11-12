const number = [10, 20, 30, 40];

const [first, ...rest] = number;

const data = {
	name: 'Narco',
	driving: 'w Polo',
	age: 34,
	lastName: 'Trafficante'
};

const { name, lastName, ...person } = data;

console.log(person);

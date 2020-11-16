const numbers = [10, 20, 30, 40];

const [first, third, ...rest] = numbers;

const data = {
	name: 'Narco',
	lastName: 'Trafficante',
	drving: 'VW Polo',
	age: 34
};

const { lastname, name, ...restData } = data;

const newData = { ...data };

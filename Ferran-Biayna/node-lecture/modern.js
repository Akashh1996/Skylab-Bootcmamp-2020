const numbers = [10, 20, 30, 40];
const [firstIndex, ...restNumbers] = numbers;

const data = {
	name: 'Narco',
	lastName: 'Traficante',
	driving: 'VW Polo',
	age: '34'
};

const { name, lastName, ...restData } = data;


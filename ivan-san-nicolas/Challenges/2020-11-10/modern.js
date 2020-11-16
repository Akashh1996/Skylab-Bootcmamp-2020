const numbers = [10, 20, 30, 40];

const [first, ...restNumbers] = numbers;

const data = {
    name: 'Narco',
    lastName: 'Trafficante',
    driving: 'VW Polo',
    age: 34
}

const {name, lastName, ...restData} = data;

console.log(restData);
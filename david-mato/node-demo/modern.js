const numbers = [10, 20, 30, 40];
const [firstNumber, ...restOfNumbers] = numbers;

const data = {
    name: 'Narco',
    lastName: 'Traficante',
    driving: 'VW Polo',
    age: 34
}

const { name, lastName, ...rest } = data;
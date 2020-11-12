const sayHi = require('neira-jorge-skylab');
const passGen = require('pass-gen-skylab');

console.log(
	'I will use here an imported function that was created in another module'
);

sayHi('patata');
passGen(8);

const x = passGen(20);
console.log(x);

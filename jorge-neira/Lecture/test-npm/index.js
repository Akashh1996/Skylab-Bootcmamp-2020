function sayHello(name) {
	!name && (name = 'John Doe');
	console.log(`*******************************`);
	console.log(`Hello ${name}, wellcome to skylab!`);
	console.log(`*******************************`);
}

module.exports = sayHello;

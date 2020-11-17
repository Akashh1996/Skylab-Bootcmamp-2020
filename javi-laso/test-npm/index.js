function sayHi(name) {
	name = name || 'stranger';

	console.log(`****************************`);
	console.log(`Hi ${name}, welcome to Skylab!`);
	console.log(`****************************`);
	console.log(`Our actual leader is Akash`);
	console.log(`****************************`);
}

module.exports = sayHi;

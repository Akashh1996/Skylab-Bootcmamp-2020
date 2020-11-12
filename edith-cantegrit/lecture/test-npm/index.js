function sayHi(name) {
	if (!name) {
		name = 'stranger';
	}
	console.log('**************');
	console.log(`Hi ${name}, welcome to Skylab!`);
	console.log('*******');
}

module.exports = sayHi;

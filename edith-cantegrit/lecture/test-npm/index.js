function sayHi(name) {
	if (!name) {
		name = 'Hola Eric, te estoy hablando desde el otro lado del mundo';
	}
	console.log('**************');
	console.log(`Hi ${name}, welcome to Skylab!`);
	console.log('*******');
}

module.exports = sayHi;

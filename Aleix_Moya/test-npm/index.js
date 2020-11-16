function sayHi(name) {
	if (!name) {
		name = 'stranger';
	}

	console.log('***************************');
	console.log(
		`Welcome ${name}, this is Skylab! And they shall be my finest warriors those who give thhemselves to me like clay i shall mold them and in the furnace of war forge them they are my space marines and they shall know no fear`
	);
	console.log('***************************');
}
module.export = sayHi;

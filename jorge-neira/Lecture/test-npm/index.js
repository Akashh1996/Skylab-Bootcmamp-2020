function passwordGenerator(numOfCharacters) {
	let str = '';
	for (counter = 0; counter <= numOfCharacters; counter++) {
		let randomNum = 0 + parseInt(Math.random() * 127);
		randomNum > 33 ? (str += String.fromCharCode(randomNum)) : counter--;
	}
	return str;
}

module.exports = passwordGenerator;
function passwordGenerator(numOfCharacters) {
	let str = '';
	for (counter = 0; counter <= numOfCharacters; counter++) {
		let randomNum = 0 + parseInt(Math.random() * 127);
		randomNum > 33 ? (str += String.fromCharCode(randomNum)) : counter--;
	}
	return str;
}

module.exports = passwordGenerator;



const arr = [1, 2, 4, 5, 4, 9, 4, 2, 7]; // 8

function sumCheck(arr, result) {}

for (let index = 0; index < arr.length; index++) {

}

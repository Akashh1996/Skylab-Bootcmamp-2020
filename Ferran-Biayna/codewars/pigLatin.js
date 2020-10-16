function pigIt(str) {
	let arrWords = str.split(' ');
	for (let i = 0; i < arrWords.length; i++) {
		arrWords[i] = arrWords[i].split('');
	}
	for (let i = 0; i < arrWords.length; i++) {
		if (arrWords[i][0] === '!' || arrWords[i][0] === '?') {
		} else {
			arrWords[i].push(arrWords[i][0]);
			arrWords[i].push('a');
			arrWords[i].push('y');
			arrWords[i].splice(0, 1);
			arrWords[i] = arrWords[i].join('');
		}
	}
	return arrWords.join(' ');
}

module.exports = pigIt;
function disemvowel(str) {
	var l = str.split('');
	for (var i = 0; i < l.length; i++) {
		if (
			l[i].toUpperCase() === 'A' ||
			l[i].toUpperCase() === 'E' ||
			l[i].toUpperCase() === 'I' ||
			l[i].toUpperCase() === 'O' ||
			l[i].toUpperCase() === 'U'
		) {
			l[i] = '';
		}
	}
	str = l.join('');
	return str;
}

module.exports = disemvowel;

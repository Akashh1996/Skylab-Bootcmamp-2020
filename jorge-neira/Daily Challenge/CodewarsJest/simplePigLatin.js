function pigIt(str) {
	var strArr = str.split(' ');
	var pigArr = strArr.map(function (element) {
		if (element === '!' || element === '?') {
			return element;
		} else {
			return element.slice(1) + element.slice(0, 1) + 'ay';
		}
	});
	var finalpig = pigArr.join(' ');
	return finalpig;
}

module.exports = pigIt;

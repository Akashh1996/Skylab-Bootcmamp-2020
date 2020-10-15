let countArray = [];
function isHappy(n, pow) {
	let nums = n.toString().split('');
	countArray.push(n);
	if (countArray[countArray.length - 1] === 1) {
		return countArray.map(function (array) {
			return array;
		});
	} else {
		let sumNums = nums.reduce((acc, cur) => cur ** pow + acc, 0);
		isHappy(sumNums, pow);
	}
	return countArray;
}

module.exports = isHappy;

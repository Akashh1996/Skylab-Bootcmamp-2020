function isHappy(n, pow) {
	let countArray = [];
	if (n.length === 1) {
		let nums = n.toString().split('');
		let sumNums = nums.reduce((acc, cur) => cur ** pow + acc, 0);
		countArray.push(sumNums);
		if (countArray[countArray.length - 1] === countArray) return countArray;
		return isHappy(sumNums, pow);
	} else {
		return n;
	}
}

export default isHappy;

function strictEquality() {
	if (arguments.length !== 2) return;
	return [...arguments].some((x) => Number.isNaN(x))
		? false
		: new Set([...arguments]).size < 2;
}

module.exports = strictEquality;

const SkylabArray = {
	push: (original, element) => {
		return {
			0: element,
			length: original.length + 1,
			__proto__: SkylabArray
		};
	}
};

let customArray = {
	length: 0,
	__proto__: SkylabArray
};

module.exports = { SkylabArray, customArray };

const deepCopy = require('./deep-copy');

xtest('Pass Object1 and return New Object2', () => {
	expect(deepCopy(object)).notToBe(object);
});

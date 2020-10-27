function fillAppWithText(appId, text, maxLength, updateView) {
	for (let i = 0; i < maxLength; i++) {
		updateView(appId, text);
	}
}

const updateView = (appId, text) => document.getElementById(appId).append(text);

fillAppWithText('app', 'Functional programming mola!', myVar, updateView);
fillAppWithText('otrApp', 'Skylab mola!', myVar, updateView);

// Tradition asynchronous named function
async function sum(a, b) {
	return a + b;
}

sum(1, 2);

// Arrow function
const sumCurry = (a) => {
const response;


	// closure
	function closure(b) {
		return a + b;
	}

	return closure;
};

sumCurry(1)(2);

// IIFE
(async function () {
	await myPromise()
})();

(() => {})()

// HOF

function hof(otherFunction) {
	kjahgsdkjahgsdkjahsgjdhgasjdhgash
	return () => otherFunction;
}

function item(value) {
	return 'value'
}

function itemComplex(value) {
	return '<a>value.id : value.name</a>'
}

function list(array, algunitem){
	return algunitem;
}

list([], item)
list([], itemComplex)




//IFE
(async function () {
	await myPromise();
})();

(() => {})();

//HOF

function hof(otherFunction) {
	fdfsdfsdfsdfdsfsdf;
	return () => otherFunction;
}

//recibe una funcon de parametro, y depende de cua recibe va  advolver algo distinto
//o devolder una fn

//callback recibe x parametro
//closure se declara dentro de la funcion

function item() {
	return 'value';
}

function itemComplex(value) {
	return '<a>value.id : value.name</a>';
}

function list(array, algunitem) {
	return algunitem;
}

list([], item);
list([], itemComplex);

function strictEquals(a, b) {
	if (isNaN(a) && isNaN(b)) {
		return false;
	} else if (!Object.is(a, b) && isNaN(a / b)) {
		return true;
	} else {
		return Object.is(a, b);
	}
}

function cloningObjects(object) {
	let cloningObject = {};
	let property;
	for (property in object) {
		if (typeof object[property] === 'object') {
			cloningObject[property] = cloningObjects(object[property]);
		} else {
			cloningObject[property] = object[property];
		}
	}
	return cloningObject;
}

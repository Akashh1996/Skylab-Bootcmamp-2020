function cloningObjects(object) {
	if (!object) {
		return object;
	} else {
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
}

module.exports = cloningObjects;

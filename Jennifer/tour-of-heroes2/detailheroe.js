function detailComponent(store) {
	let id = location.search;
	id = id.split('?id=');
	id = Number(id[1]);
	const heroProfile = store.getheroById(id);
	document.getElementById('hero-id__value').innerHTML = id;
	const heroName = document.getElementById('hero-name__input');
	heroName.value = heroProfile.name;
	document.getElementById('name-hero').innerHTML = heroProfile.name;
	showProperties(heroProfile);
}

function showProperties(heroProfile) {
	const sectionProperties = document.getElementById('properties-list');

	for (let propertyName in heroProfile) {
		const divProperty = document.createElement('div');
		divProperty.classList.add('div-properties');
		divProperty.id = propertyName;
		if (typeof heroProfile[propertyName] === 'object') {
			//MOSTRAR EL NOMBRE DE LA PROPIEDAD PRINCIPAL
			//propertyname

			for (let subProperty in heroProfile[propertyName]) {
				const divSubProperty = document.createElement('div');
				divSubProperty.innerHTML =
					subProperty + ': ' + heroProfile[propertyName][subProperty];

				divProperty.appendChild(divSubProperty);
			}
		} else {
			divProperty.innerHTML = propertyName + ': ' + heroProfile[propertyName];
		}
		sectionProperties.appendChild(divProperty);
	}
}

detailComponent(store);

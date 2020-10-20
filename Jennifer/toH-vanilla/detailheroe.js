function detailComponent(store) {
	let id = location.search;
	id = id.split('?id=');
	id = Number(id[1]);
	const heroProfile = store.getheroById(id);
	document.getElementById('hero-id__value').innerHTML = id;
	const heroName = document.getElementById('hero-name__input');
	heroName.value = heroProfile.name;
	document.getElementById('name-hero').innerHTML = heroProfile.name;
}

detailComponent(store);

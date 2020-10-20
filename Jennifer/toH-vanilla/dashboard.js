function topheroes(store) {
	const heroes = store.getTopHeroes();
	for (var i = 0; i < heroes.length; i++) {
		document.getElementById(`${i}`).innerText = heroes[i].name;
		//document.getElementById(i.toString()).innerHTML = heroes[i].name;
	}
}

topheroes(store);

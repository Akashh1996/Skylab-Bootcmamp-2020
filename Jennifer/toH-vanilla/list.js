function listHeroes(store) {
	const heroes = store.getHeroes();
	for (let i = 0; i < heroes.length; i++) {
		debugger;
		document.getElementById(
			'hero-container'
		).innerHTML += `<a class= "linkNames" href="detailheroe.html?id=${heroes[i].id}">${heroes[i].id}
		${heroes[i].name}
		</a>
		`;
	}
}

listHeroes(store);

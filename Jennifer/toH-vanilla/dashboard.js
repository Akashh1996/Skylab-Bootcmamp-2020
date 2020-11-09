function topheroes(store) {
	const heroes = store.getTopHeroes();
	for (let i = 0; i < heroes.length; i++) {
		document.getElementById('top-heroes').innerHTML =
			document.getElementById('top-heroes').innerHTML +
			`
	<a href="detailheroe.html?id=${heroes[i].id}">
		<div class="module-hero">
			<h4>${heroes[i].name}</h4>
		</div>
	</a>
	`;
	}
}

topheroes(store);

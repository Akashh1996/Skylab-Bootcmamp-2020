function getTopHeroes(store) {
	const topHeroesDash = document.querySelectorAll('.heroe__name');
	const topHeroes = store.getTopHeroes();
	topHeroes.forEach((hero, index) => {
		topHeroesDash[index].innerText = `${hero.name}`;
	});
}
getTopHeroes(store);

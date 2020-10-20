function topHeroes(dashboard) {
	const topHeroesDash = document.querySelectorAll('.hero-name');
	const topHeroes = dashboard.getTopHeroes();
	topHeroes.forEach((hero, index) => {
		topHeroesDash[index].innerText = `${hero.name}`;
	});
}

class DashboardComponent {
	constructor(hero) {
		this.hero = hero;
	}
	topHeroes(dashboard) {
		const topHeroesDash = document.querySelectorAll('.hero-name');
		const topHeroes = dashboard.getTopHeroes();
		topHeroes.forEach((hero, index) => {
			topHeroesDash[index].innerText = `${hero.name}`;
		});
	}
}

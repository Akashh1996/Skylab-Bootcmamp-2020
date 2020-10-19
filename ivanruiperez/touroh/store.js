class Store {
	getHeroes() {
		return heroes;
	}

	getHeroById(heroId) {
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

	getTopHeroes() {
		return this.getHeroes().slice(0, 4);
	}
}

const store = new Store();

function getTopHeroes(store) {
	console.log(store);
	const topHeroesDash = document.querySelectorAll('.heroe__name');
	const topHeroes = store.getTopHeroes();
	topHeroes.forEach((hero, index) => {
		topHeroesDash[index].innerText = `${hero.name}`;
	});
	console.log(topHeroesDash);
}
getTopHeroes(store);

//module.exports = store;

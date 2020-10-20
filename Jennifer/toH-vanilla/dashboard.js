const store = require('./store');

function topheroes(store) {
	const heroes = store.getTopHeroes();
	//const sectionHtml = document.getElementsByClassName('top-heroes');
	for (var i = 0; i < heroes.length; i++) {
		//document.getElementById(`${i}`).innerText = heroes[i].name;
		let link = `<a href="../detailheroe.html?heroId=${heroes[i].id}">${heroes[i].name}</a>`;

		//sectionHtml.append();

		//document.getElementById(i.toString()).innerHTML = heroes[i].name;
	}
}

topheroes(store);

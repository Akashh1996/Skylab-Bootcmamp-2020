const store = require('./store');

function listHeroes(store) {
	let herocontainer = document.getElementById('hero-container');
	let list = document.createElement('ol');
	herocontainer.appendChild(list);

	for (var i = 0; i < heroes.length; i++) {
		let div = document.createElement('div');
		div.setAttribute('class', 'list-elements');
		list.appendChild(div);

		document.getElementById(`${i}`).innerText = heroes[i].name;
		let listElement = document.createElement('li');
		let textid = document.createTextNode(heroes[i].id);
		let textname = document.createTextNode(heroes[i].name);
		listElement.appendChild(textid);
		listElement.appendChild(textname);
		document.getElementById('list').appendChild(listElement).innerHTML;
	}
}

listHeroes(store);

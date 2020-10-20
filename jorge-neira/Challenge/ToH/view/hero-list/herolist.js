function generateList() {
	const herolistSection = document.querySelector('.hero-list');
	debugger;
	const createUlList = document.createElement('ul');
	herolistSection.appendChild(createUlList);
	for (let liItem = 0; liItem < 10; liItem++) {
		debugger;
		const listItem = document.createElement('li');
		listItem.className = 'list-item';
		createUlList.appendChild(listItem);
		const idSpanItem = document.createElement('span');
		idSpanItem.className = 'hero-id';
		const nameSpanItem = document.createElement('span');
		nameSpanItem.className = 'hero-name';
		listItem.appendChild(idSpanItem);
		const anchorItem = document.createElement('a');
		idSpanItem.appendChild(anchorItem);
		idSpanItem.innerText = 'test';
	}
}

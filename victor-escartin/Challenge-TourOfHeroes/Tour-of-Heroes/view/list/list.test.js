const HeroesComponent = require('./list');

describe('heroes', () => {
	let heroesComponent;
	const heroes = [{ id: 11, name: 'Dr Nice' }];

	beforeEach(() => {
		heroesComponent = new HeroesComponent(heroes);
	});

	test.only('should call updateHtmlHeroList', () => {
		const element = {};
		const markup = `
        <div id="p11" class="list-item">
        <div id="p11-number" class="box-position">1</div>
        <a
            id="p11-name"
            class="name-position"
            href="../details/details.html?heroId=11"
            >Dr Nice</a
        >
    </div>
`;

		heroesComponent.updateHtmlHeroList(element);

		expect(element.innerHTML).toBe(markup);
	});
});

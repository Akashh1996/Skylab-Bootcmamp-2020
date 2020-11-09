const HeroesComponent = require('./heroes');

describe('heroes', () => {
	let heroesComponent;
	const heroes = [{ id: 12, name: 'Narco' }];

	beforeEach(() => {
		heroesComponent = new HeroesComponent(heroes);
	});

	test('should create', () => {
		expect(heroesComponent).toBeDefined();
	});

	test('should call updateHtmlHeroList', () => {
		const element = {};
		const markup = `
<li>
<a href="../detail/detail.html?heroId=12">
<span class="badge" id="hero-id">12</span>
<span id="hero-name">Narco</span>
</a>
<button class="delete" title="delete hero">x</button>
</li>
`;

		heroesComponent.updateHtmlHeroList(element);

		expect(element.innerHTML).toBe(markup);
	});
});

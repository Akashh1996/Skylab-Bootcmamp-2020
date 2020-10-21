const DashboardComponent = require('./dashboard');

describe('dashboard', () => {
	let dashboardComponent;
	const pokemon = [{ id: 12, name: '' }];

	beforeEach(() => {
		dashboardComponent = new DashboardComponent(pokemon);
	});

	test('should create', () => {
		expect(dashboardComponent).toBeDefined();
	});

	test('should call updateHtmlpokemonList', () => {
		const element = {};
		const markup = `
<a href="../detail/detail.html?pokemonId=12" class="col-1-4">
<div class="module pokemon">
<h4>Ditto</h4>
</div>
</a>
`;

		dashboardComponent.updateHtmlpokemonList(element);

		expect(element.innerHTML).toBe(markup);
	});
});
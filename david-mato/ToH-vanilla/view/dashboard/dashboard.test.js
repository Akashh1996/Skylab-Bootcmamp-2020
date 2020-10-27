const DashboardComponent = require('./dashboard');

describe('dashboard', () => {
	let dashboardComponent;
	const heroes = [{ id: 12, name: 'Narco' }];

	beforeEach(() => {
		dashboardComponent = new DashboardComponent(heroes);
	});

	test('should create', () => {
		expect(dashboardComponent).toBeDefined();
	});

	test('should call updateHtmlHeroList', () => {
		const element = {};
		const markup = `<a class="top-heroes-buttons" href="../detail/detail.html?heroId=12">Narco</a>`;

		dashboardComponent.updateHtmlHeroList(element);

		expect(element.innerHTML).toBe(markup);
	});
});
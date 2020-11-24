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
		const markup = `
<a href="../detail/detail.html?heroId=12" class="col-1-4">
<div class="module hero">
<h4>Narco</h4>
</div>
</a>
`;

		dashboardComponent.updateHtmlHeroList(element);

		expect(element.innerHTML).toBe(markup);
	});
});

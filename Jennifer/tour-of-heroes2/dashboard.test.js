const topheroes = require('./dashboard');

xdescribe('dashboard', () => {
	test('should call topheroes and print the names', () => {
		const element = {};
		const result = `
        <a href="detailheroe.html?id=14">
            <div class="module-hero">
                <h4>superman</h4>
            </div>
        </a>
        `;
		expect(element.innerHTML).toBe(result);
	});
});

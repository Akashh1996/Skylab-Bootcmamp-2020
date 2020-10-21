const DetailComponent = require('./detail');

describe('details', () => {
	let detailComponent;
	const hero = { name: 'Narco', id: 12 };

	beforeEach(() => {
		detailComponent = new DetailComponent(hero);
	});

	test('should create', () => {
		expect(detailComponent).toBeDefined();
	});

	test('should contain Narco details', () => {
		expect(detailComponent.hero).toEqual({ name: 'Narco', id: 12 });
	});

	test('should call addPhoto', () => {
		// arrange
		const element = {};
		const property = 'innerHTML';
		const value = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/4-abomination.jpg";

		// act
		detailComponent.addPhoto(element, property, value);

		// assert
		expect(element[property]).toEqual(`<img src="${value}" />`);
	});

	test('should call updateHtmlValue', () => {
		// arrange
		const element = {};
		const property = 'value';
		const value = 'Narco';

		// act
		detailComponent.updateHtmlValue(element, property, value);

		// assert
		expect(element.value).toEqual('Narco');
	});

	test('should call updateHtmlValue, return a list if a property points at an object and transform the first letter to uppercase', () => {
		// arrange
		const element = {};
		const property = 'innerHTML';
		const value = {property1: 'value1'};

		// act
		detailComponent.updateHtmlValue(element, property, value);
		const objectKeyUpperCase = `${Object.keys(value)[0].slice(0, 1).toUpperCase()}${Object.keys(value)[0].slice(1)}`

		// assert
		expect(element[property]).toEqual(`<ul class="hero-subproperties-list"><li class="hero-subproperties-list__suproperty">${objectKeyUpperCase}: ${Object.values(value)}</li></ul>`);
		})

		test('should call updateHtmlValue and continue if value contains an array that includes "-"', () => {
			// arrange
			const element = {};
			const property = 'innerHTML';
			const value = {property1: ['-']};
	
			// act
			detailComponent.updateHtmlValue(element, property, value);
	
			// assert
			expect(element[property]).toEqual(`<ul class="hero-subproperties-list"></ul>`);
		})

		test('should call updateHtmlValue and continue if value is "-"', () => {
			// arrange
			const element = {};
			const property = 'innerHTML';
			const value = {property1:'-'};
	
			// act
			detailComponent.updateHtmlValue(element, property, value);
	
			// assert
			expect(element[property]).toEqual(`<ul class="hero-subproperties-list"></ul>`);
		})

		test('should call updateHtmlValue and add a space before each item if value has a property that points to an array that does not include "-"', () => {
			// arrange
			const element = {};
			const property = 'innerHTML';
			const value = {property1:['hello', 'world']};
			const arrItemsWithLeadingSpace = 'hello, world';
	
			// act
			detailComponent.updateHtmlValue(element, property, value);
			const objectKeyUpperCase = `${Object.keys(value)[0].slice(0, 1).toUpperCase()}${Object.keys(value)[0].slice(1)}`

	
			// assert
			expect(element[property]).toEqual(`<ul class="hero-subproperties-list"><li class="hero-subproperties-list__suproperty">${objectKeyUpperCase}: ${arrItemsWithLeadingSpace}</li></ul>`);
		})

})
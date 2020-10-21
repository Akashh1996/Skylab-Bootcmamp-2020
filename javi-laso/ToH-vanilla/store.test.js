const store = require('./store');

describe('Store', () => {
    let location;
    let element;
    let circle;
    let heroes;
    beforeEach(() => {
        heroes = [
            { "id": 11, "name": "Dr Nice"},
            { "id": 12, "name": "Narco"},
            { "id": 13, "name": "Bombasto"},
            { "id": 14, "name": "Celeritas"},
            { "id": 15, "name": "Magneta"},
            { "id": 16, "name": "RubberMan"},
            { "id": 17, "name": "Dynama"},
            { "id": 18, "name": "Dr IQ"},
            { "id": 19, "name": "Magma"},
            { "id": 20, "name": "Tornado" }
        ];
        element = document.createElement('div');
        location = {search: '?id=15'};
        circle = document.createElement('circle');
        circle.setAttribute('r', 37);
    });

    test('should create', () => {
        expect(store).toBeDefined();
    });

    describe('loadHeroes', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce([{ id: 12, name: 'Narco' }])
				})
			);
		});
        test('should ', () => {
            return store.loadHeroes().then(() => {
                test('should update _heroes', () => {
                    return store.loadHeroes().then(() => {
                        expect(store.getHeroes()).toEqual([{ id: 12, name: 'Narco' }]);
                    });
                });
            });
        });
    });

    describe('getHeroes', () => {
        test('should call getHeroes and return an array of heroes', () => {
            expect(store.getHeroes()).toBeDefined();
        });

        test('should have all the heroes', () => {
            expect(store.getHeroes().length).toBe(10);
        });
    });

    describe('getHeroById', () => {
        test('should call getHeroById and return one hero', () => {
            expect(store.getHeroById(1)).toEqual({ "id": 11, "name": "Dr Nice"});
        });
        
        test('should return undefined if no hero has the id', () => {
            expect(store.getHeroById(9)).toBe(undefined)});
    });

    describe('getTopHeroes', () => {
        test('should call getTopHeroes and return the first four heroes', () => {
            expect(store.getTopHeroes()).toEqual([
            { "id": 11, "name": "Dr Nice"},
            { "id": 12, "name": "Narco"},
            { "id": 13, "name": "Bombasto"},
            { "id": 14, "name": "Celeritas"}]);
        });
    });

    describe('getIdFromLocation', () => {
        test('should return the id from a location', () => {
            expect(store.getIdFromLocation(location)).toBe('15');
        });
    });

    describe('createDashboardElement', () => {
        test('should append an element in the parent element', () => {
            //arrange          
            //act
            store.createDashboardElement(element, heroes, 2);
            //assert          
            expect(element.hasChildNodes()).toBe(true);
        });
        
        test('the list element has to have an element', () => {
            //arrange          
            //act
            store.createDashboardElement(element, heroes, 2);
            //assert          
            expect(element.firstChild.hasChildNodes()).toBe(true);
        });
    });
    

    describe('updateHTMLHeroesDashboard', () => {
        test('the dashboard should have four childs', () => {
            //arrange          
            //act
            store.updateHTMLHeroesDashboard(element);
            //assert          
            expect(element.childNodes.length).toBe(4);
        });
    });

    describe('createListElement', () => {
        test('should append an element in the parent element', () => {
            //arrange          
            //act
            store.createListElement(element, heroes, 2);
            //assert          
            expect(element.hasChildNodes()).toBe(true);
        });
        
        test('the list element has to have an element', () => {
            //arrange          
            //act
            store.createListElement(element, heroes, 2);
            //assert          
            expect(element.firstChild.hasChildNodes()).toBe(true);
        });
    });

    describe('updateHTMLHeroesList', () => {
        test('the list should have ten childs', () => {
            //arrange          
            //act
            store.updateHTMLHeroesList(element);
            //assert          
            expect(element.childNodes.length).toBe(10);
        });
    });

    describe('setstrokeDashoffsetInCircle', () => {
        test('should assign dashoffset of aprox 144.136 to a circle with radius 37 and percent 38', () => {
            //arrange          
            //act
            store.setStrokeDashoffsetInCircle(circle, 38);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBeCloseTo(144.136);
        });
        
        test('should assign dashoffset of 0 to a circle if percent >100', () => {
            //arrange          
            //act
            store.setStrokeDashoffsetInCircle(circle, 110);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBe(0);
        });
        
        test('should assign dashoffset of almost equal than circumference to a circle if percent <0', () => {
            //arrange
            const circumference = Math.PI * 2 * circle.getAttribute('r');
            //act
            store.setStrokeDashoffsetInCircle(circle, -10);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBeCloseTo(circumference);
        });
    });

    describe('setStrokeDasharrayInCircle', () => {
        test('should assign dasharray of almost equal than circumference of the circle', () => {
            //arrange
            const circumference = Math.PI * 2 * circle.getAttribute('r');
            //act
            store.setStrokeDasharrayInCircle(circle, 38);
            response = +circle.style.strokeDasharray;
            //assert          
            expect(response).toBeCloseTo(circumference);
        });
    });

    describe('updateValueHtml', () => {
        test('should change innerHTML from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'innerHTML', 'hola');
            //assert          
            expect(element.innerHTML).toBe('hola');
        });

        test('should change value from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'value', 20);
            //assert          
            expect(element.value).toBe(20);
        });

        test('should change max from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'max', 80);
            //assert          
            expect(element.max).toBe(80);
        });

        test('should assign "-" if value is null', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'max', null);
            //assert          
            expect(element.max).toBe('-');
        });
    });
});
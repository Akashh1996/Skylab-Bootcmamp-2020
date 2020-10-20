const detailComponent = require('/detail2');
const 

describe('details', () => {
    let detailComponent;
    beforeEach(() => {
        detailComponent = new DetailComponent(store, 12);
    })

    test('should create', () => {
        expect(detailComponent).toBeDefined();
    });

    test('should contain narco details', () => {
        expect(detailComponent.hero).toEqual({name: 'Narco', id: 12});
    });
    
    test('should update html value', () => {
        //arrange
        const element = {};
        const property = 'value';
        const value = 'Narco';
        //act
        detailComponent.updateHTMLProperty(element, property, value);
        //assert
        expect(element[property]).toEqual('Narco');
    });
});



describe('getHeroId', () => {

    test('should return id value 12', () => {
        let location = { search: "?heroId=12"};
        const heroId = getHeroId(location);
        expect(heroId).toBe(12);
    })
})
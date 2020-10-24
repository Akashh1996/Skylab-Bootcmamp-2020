const DetailComponent = require('./detail');

describe('detail', () => {
    let detailComponent;
    const pokemon = {name: 'bulbasaur'};

    beforeEach(() => {
        detailComponent = new DetailComponent(pokemon);
    })

    test('should create detailComponent', () => {
        expect(detailComponent).toBeDefined();
    })

    test('should return a pokemon object', () => {
        expect(detailComponent.pokemon).toEqual(pokemon);
    })

    test('should call updateHtmlValue', () => {
        const element = {};
        const property = 'innerHTML';
        const value = 'bulbasaur'

        detailComponent.updateHtmlValue(element, property, value)

        expect(element[property]).toEqual(value);
    })

    test('should call updateHtmlValueToButton', () => {
        const element = {};
        const property = 'innerHTML';
        const value = 'bulbasaur';

        detailComponent.updateHtmlValueToButton(element, property, value)

        expect(element[property]).toEqual(`<a href='../detail/ability-detail.html?abilityName=${value}'>${value}</a>`);
    })

    test('should call loadPhoto', () => {
        const element = {};
        const property = 'innerHTML';
        const value = 'url';

        detailComponent.loadPhoto(element, property, value)

        expect(element[property]).toEqual(`<img src="${value}" />`);
    })
})
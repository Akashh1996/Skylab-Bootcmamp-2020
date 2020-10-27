const DetailComponent = require('./detailheroe')

describe('details',()=> {
    let detailComponent;

    test('should create', () =>{
        expect(detailComponent).toBeDefined();
    });

    test('should contain hero details', () => {
        expect(detailComponent.hero).toEqual({name: 'Narco', id: 12});
    });

    test('should call updateHtmlValue', () =>{
        //arange
        const element = {value};
        const property;
        const value;
        //act
        detailComponent.updateHtmlValue(element, property, value);
        //assert
        expect(element.value).toEqual('Narco'))
    });
});


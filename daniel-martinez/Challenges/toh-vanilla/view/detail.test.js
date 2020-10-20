const DetailComponent = require("./detail");
const store = require("../store")

describe ('details', () => {

    beforeEach(() =>{
        
    })

    test('should create', ()=> {
        expect(detailComponent).toBeDefined();
    });

    test('should contain hero details', ()=>{
        expect(detailComponent.hero).toEqual({name: 'Narco', id:12});
    })
    test('should call updateHtmlValue', ()=>{
        //arrange
        const element = {};
        const property = 'value';
        const value = 'Narco';

        //act
        detailComponent.updateHtmlValue(element, property, value);

        //assert
        expect(element.value).toEqual('Narco');
    })
})
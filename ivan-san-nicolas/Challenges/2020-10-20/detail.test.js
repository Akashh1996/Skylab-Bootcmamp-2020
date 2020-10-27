const detailComponent = require('./detail');

describe('details', () => {
    test('should create', () => {
        expect(detailComponent).toBeDefined();
    });
    test('should contain Narco details', () => {
        expect(detailComponent.hero).toEqual({
            name: 'Narco',
            id: 12
        })
    })
})
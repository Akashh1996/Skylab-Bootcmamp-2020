const AbilityComponent = require('./ability-detail');

describe('ability component', () => {
    let abilityComponent;
    const ability = {name: 'speed'};

    beforeEach(() => {
        abilityComponent = new AbilityComponent(ability);
    })

    test('should create', () => {
        expect(abilityComponent).toBeDefined();
    })

    test('should contain an object ability', () => {
        expect(abilityComponent.ability).toEqual(ability);
    })

    test('should call updateHtmlElement', () => {
        const element = {};
        const value = 'speed';

        abilityComponent.updateHtmlElement(element, value);

        expect(element.innerHTML).toEqual('speed');
    })
})
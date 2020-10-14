const deepClone = require('./deep-copy');

describe ('deepClone', () => {


    test('should clone null', () => {
        //arrange
        let original = null;
        
        //act
        let copy = deepClone(original);

        //assert
        expect(copy).toBe(original);
        // expect(copy).toEqual(cityCountries);
    });

    test('should clone an undefined', () => {
        //arrange
        let original = undefined;
        
        //act
        let copy = deepClone(original);

        //assert
        expect(copy).toBe(original);
        // expect(copy).toEqual(cityCountries);
    });

    test('should clone one level object', () => {
        //arrange
        let original = {name: 'Gilbe', Age: 34};
        
        //act
        let copy = deepClone(original);

        //assert
        expect(copy).toEqual(original);
        // expect(copy).toEqual(cityCountries);
    });

    test('should clone two levels object', () => {
        //arrange
        let original = {name: 'Gilbe', 
        Age: 34, 
        skills: {
            js: 100, 
            ski: 90
            }
        };
        
        //act
        let copy = deepClone(original);

        //assert
        expect(copy.skills !== original.skills && copy.skills.js === original.skills.js).toBe(true);
    });

    test('should clone three levels object', () => {
        //arrange
        let original = {
            name: 'Gilbe', 
            Age: 34, 
            skills: { 
                js: {min:0, max:100, current:100}, 
                ski: {min:0,max: 100, current:90}
            }
        };
        
        //act
        let copy = deepClone(original);

        //assert
        expect(copy.skills !== original.skills && copy.skills.js !== original.skills.js && copy.skills.js.min === original.skills.js.min).toBe(true);
        // expect(copy).toEqual(cityCountries);
    });

    test('should clone an empty object', () => {
        //arrange
        let original = {};
        
        //act
        let copy = deepClone(original);

        //assert
        expect(copy).toMatchObject(original);
        // expect(copy).toEqual(cityCountries);
    });
});


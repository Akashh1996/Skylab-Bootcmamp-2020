const myFunction = require('./equals-object')

xdescribe('Sum', () =>{
    test('should sum 1 + 2 equals 3', () => {
        expect(sum(1,2)).toBe(3)
    })
    
    test('should sum 2 + 4 equals 6', () => {
        expect(sum(2,4)).toBe(6)
    })
})



xdescribe('strictEquals', () =>{
    test('should Object.is(0, -0) return true', () => {
        expect(myFunction(0, -0)).toBe(true)
    })
    test('should Object.is(NaN, NaN) return false', () => {
        //arrenge
        const a = NaN;
        const b = NaN;

        //act
        const response = myFunction(a,b);

        //assets
        expect(response).toBe(false);
    })
})

describe('deepClone', () => {
    test('should clone a null object', () => {
        //arrenge
        const original = null;
        //act
        const copy = deepClone(original); 
        //assets
        expect(copy).toEqual(original);
    })
    test('should clone a two level object', () => {
        //arrenge
        const original = { name: 'Gilbe', age: 35, skills: {js: 100, ski: 90}};
        //act
        const copy = deepClone(original); 
        //assets
        expect(copy.skills !== original.skills && copy.skills.js === original.skills.js).toBe(true);
    })
    test.only('should clone a three level object', () => {
        //arrenge
        const original = { 
            name: 'Gilbe', 
            age: 35, 
            skills: {
                js: {min: 0, max: 100, current: 100}, 
                ski: {min: 0, max: 100, current: 100}
            }
        };
        //act
        const copy = deepClone(original); 
        //assets
        expect(copy.skills !== original.skills && copy.skills.js === original.skills.js).toBe(true);
    })
    test('should clone an object with array', () => {
        //arrenge
        const original = { name: 'Gilbe', age: 35, skills: ["js","ski"]};
        //act
        const copy = deepClone(original); 
        //assets
        expect(copy).toEqual(original);
    })
})
const myFunction = require('./equals-object')
//import {strictEquals, sum} from './equals-object.js';

xdescribe('Sum', () =>{
    test('should sum 1 + 2 equals 3', () => {
        expect(sum(1,2)).toBe(3)
    })
    
    test('should sum 2 + 4 equals 6', () => {
        expect(sum(2,4)).toBe(6)
    })
})



describe('strictEquals', () =>{
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

const sum =require('./sum');

// test('sum 1+2 equals 3',()=>{
//     expect(sum(1,2)).toBe(3) 
// });
// test('sum 3+5 equals 3',()=>{
//     expect(sum(3,5)).toBe(8) 
// });

describe('Sum',    () => {
    testEquals('should sum 1+2 equals 3', ()=>{
        expect(sum(8,10).toBe(18))
    })
})

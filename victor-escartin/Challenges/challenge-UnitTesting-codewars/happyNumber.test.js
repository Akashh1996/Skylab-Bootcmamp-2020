const isHappy=require('./happyNumber');

describe('isHappy',    () => {
    test('should return return an array of numbers containing whatever loop it encounters, or [1] if it doesn t encounter any)', ()=>{
        //arrange       
        const a=[42, 20, 4, 16, 37, 58, 89, 145, 42];
        //act
        const response=isHappy(42, 2);
        //assert
        expect(response).toBe(1) 
    })
})
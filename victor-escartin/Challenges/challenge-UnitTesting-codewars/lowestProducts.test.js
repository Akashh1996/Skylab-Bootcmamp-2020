const lowestProducts=require('./lowestProducts');

describe('lowestProducts',    () => {
    test('should return the lowest product of 4 consecutive digits in a number given as a string.)', ()=>{
        //arrange       
        const a=24;
        //act
        const response=lowestProducts("123456789");
        //assert
        expect(response).toBe(a) 
    })
})
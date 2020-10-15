const findOdd=require('./findOdd');

describe('findOdd',    () => {
    test('should return the one that appears an odd number of times)', ()=>{
        //arrange       
        const a=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
        //act
        const response=findOdd(a);
        //assert
        expect(response).toBe(5) 
    })
})
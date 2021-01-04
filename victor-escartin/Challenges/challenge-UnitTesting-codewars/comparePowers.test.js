const comparePowers=require('./comparePowers');

describe('comparePowers',    () => {
    test('should return -1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare will be provided in the [base, exponent] format)', ()=>{
        //arrange       
        const a=[2,10],[2,15];
        //act
        const response=comparePowers(a);
        //assert
        expect(response).toBe(1) 
    })
})
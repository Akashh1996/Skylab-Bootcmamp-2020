const highAndLow=require('./highAndLow');

describe('highAndLow',    () => {
    test('should return  the highest and lowest number)', ()=>{
        //arrange       
        const a="542 -214";
        //act
        const response=highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
        //assert
        expect(response).toBe(a) 
    })
})
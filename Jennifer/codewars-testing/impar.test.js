const findOdd = require('./impar');

describe("find odd number",() =>{
    test("should return odd number",() =>{
        //arange
        const string = [1,1,1,1,1,1,10,1,1,1,1];
        //act
        const result = findOdd(string);
        //assert
        expect(result).toBe(10);
    });

    test("should return odd number",() =>{
        //arange
        const string = [1,1,2,-2,5,2,4,4,-1,-2,5];
        //act
        const result = findOdd(string);
        //assert
        expect(result).toBe(-1)
    });

    test("should return only a number",() =>{
        //arange
        const string = [10];
        //act
        const result = findOdd(string);
        //assert
        expect(result).toBe(10)
    });
    
    test("should return only a number",() =>{
        //arange
        const string = [1,1,2,-2,5,2,4,4,-1,-2,5];
        //act
        const result = findOdd(string);
        //assert
        expect(result).toBe(-1)
    });


});


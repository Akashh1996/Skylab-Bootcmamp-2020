const isHappy = require('./happy-number')

describe("isHappy",() =>{
    test("should return 1 if is a happy number'",() =>{
        //arange
        let numb = 16;
        let pow = 2;
        //act
        const copyObject = isHappy(numb,pow);
        //assert
        expect(copyObject).toBe(false);
    });

    test("should return 1 if is a happy number'",() =>{
        //arange
        let numb = 7;
        let pow = 2;
        //act
        const copyObject = isHappy(numb,pow);
        //assert
        expect(copyObject).toBe(true);
    });
});



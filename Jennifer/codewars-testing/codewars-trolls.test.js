const disemvowel = require('./codewars-trolls');
const copyObject = require('./codewars-trolls')

describe("disemvowel",() =>{
    test("should return a string -> 'The wbst s fr lsrs LL!'",() =>{
        //arange
        let str = "This website is for losers LOL!"
        //act
        let provisionalStr = disemvowel(str);
        //assert
        expect(provisionalStr).toBe("Ths wbst s fr lsrs LL!");
    });
});

const disemvowel=require('./disemvol')

describe('disemvol',()=>{
    test("should remove al vowels",()=>{
        const original = "This website is for losers LOL!";
        const disenvow = disemvowel (original);
        const result="Ths wbst s fr lsrs LL!";
        expect(disenvow).toBe(result)
    });
  
});
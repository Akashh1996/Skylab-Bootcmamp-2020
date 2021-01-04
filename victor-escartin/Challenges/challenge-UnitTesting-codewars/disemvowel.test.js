const disemvowel=require('./disemvowel');

describe('disemvowel',    () => {
    test('should return the phrase removing all the vowels)', ()=>{
        //arrange       
        const a="Ths wbst s fr lsrs LL!";
        //act
        const response=disemvowel("This website is for losers LOL!");
        //assert
        expect(response).toBe(a) 
    })
})


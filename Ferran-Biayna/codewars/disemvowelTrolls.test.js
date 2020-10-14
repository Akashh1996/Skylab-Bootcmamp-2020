const disemvowel = require('./disemvowelTrolls');

describe('Disemvowel', () => {

    test('"This website is for losers LOL!" should be "Ths wbst s fr lsrs LL!"', () => {

        // arrange
        let a="This website is for losers LOL!"
    
        // act
        let response = disemvowel(a)
    
        // assert
        expect(response).toBe("Ths wbst s fr lsrs LL!")
    
        })

})
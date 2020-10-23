const highAndLow = require('./highAndLow');

describe('highAndLow', () => {

    test('("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") should return "542 -214"', () => {

        // arrange
        let a=("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
    
        // act
        let response = highAndLow(a)
    
        // assert
        expect(response).toBe("542 -214")
    
        })

    test('("1 2 3 4 5") should return "5 1"', () => {

        // arrange
        let a=("1 2 3 4 5")
    
        // act
        let response = highAndLow(a)
    
        // assert
        expect(response).toBe("5 1")
    
        })

})
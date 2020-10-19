const comparePowers = require("./comparePowers");

describe('comparePowers', () => {

    test('[2,10],[2,15] should return 1', () => {

        // arrange
        let a=[2,10]
        let b=[2,15]
    
        // act
        let response = comparePowers(a, b)
    
        // assert
        expect(response).toBe(1)
    
        })
        
    test('[2,10],[2,10] should return 0', () => {

        // arrange
        let a=[2,10]
        let b=[2,10]
    
        // act
        let response = comparePowers(a, b)
    
        // assert
        expect(response).toBe(0)
    
        })

    test('[3,9],[5,6] should return -1', () => {

        // arrange
        let a=[3,9]
        let b=[5,6]
    
        // act
        let response = comparePowers(a, b)
    
        // assert
        expect(response).toBe(-1)
    
        })



  });


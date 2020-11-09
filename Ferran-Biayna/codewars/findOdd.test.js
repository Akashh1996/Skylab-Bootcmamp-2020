const findOdd = require("./findOdd");

describe('findOdd', () => {

    test('[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] should return "5"', () => {

        // arrange
        let a=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
    
        // act
        let response = findOdd(a)
    
        // assert
        expect(response).toBe(5)
    
        })

    test('[1,1,2,-2,5,2,4,4,-1,-2,5] should return "-1"', () => {

        // arrange
        let a=[1,1,2,-2,5,2,4,4,-1,-2,5]
    
        // act
        let response = findOdd(a)
    
        // assert
        expect(response).toBe(-1)
    
        })

  });
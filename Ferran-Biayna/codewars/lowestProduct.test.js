const lowestProduct = require("./lowestProduct");

describe('lowestProduct', () => {

    test('"123456789" should return 24', () => {

        // arrange
        let a="123456789"
    
        // act
        let response = lowestProduct(a)
    
        // assert
        expect(response).toBe(24)
    
        })

    test('"2345611117899" should return 1', () => {

        // arrange
        let a="2345611117899"
    
        // act
        let response = lowestProduct(a)
    
        // assert
        expect(response).toBe(1)
    
        })

  });
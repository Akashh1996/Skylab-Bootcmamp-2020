const lowestProduct = require('./lowestProduct');

describe ('lowestProduct', () => {
    test('should return the lowest product of 4 consecutive digits in a number given as a string', () => {
         //arrange
         const a = 8651111119;
        
 
         //act
         const response = lowestProduct(a);
 
 
 
         //assert
         expect(response).toBe(1);
    });

})



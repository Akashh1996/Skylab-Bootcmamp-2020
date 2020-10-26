const highAndLow = require('./highAndLow');

describe ('highAndLow', () => {
    test('should show the max number and the min number', () => {
         //arrange
         const numbers = "3 4 5 6 7";
 
         //act
         const response = highAndLow(numbers);
 
 
 
         //assert
         expect(response).toBe("7 3");
    });

    test('should show the max number and the min number', () => {
        //arrange
        const numbers = "3 -4 99 6 7";

        //act
        const response = highAndLow(numbers);



        //assert
        expect(response).toBe("99 -4");
   });

})
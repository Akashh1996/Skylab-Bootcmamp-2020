const multiply = require('./multiply');

describe ('multiply', () => {
    test('should multiply 1 * 2 return 2', () => {
         //arrange
         const a = 1;
         const b = 2;
 
         //act
         const response = multiply(a,b);
 
 
 
         //assert
         expect(response).toBe(2);
    })
    test('should multiply 5 * 10 return 50', () => {
        //arrange
        const a = 5;
        const b = 10;

        //act
        const response = multiply(a,b);



        //assert
        expect(response).toBe(50);
   })
   test('should multiply 4 * 6 return 24', () => {
    //arrange
    const a = 4;
    const b = 6;

    //act
    const response = multiply(a,b);



    //assert
    expect(response).toBe(24);
})
})
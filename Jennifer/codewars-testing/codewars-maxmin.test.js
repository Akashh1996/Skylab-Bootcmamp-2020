const highAndLow = require('./codewars-maxmin')

describe("highAndLow",() =>{
    test("should return two numbers in a text string, min and  max",() =>{
      //arrange
        const a = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
      //act
      const response = highAndLow(a);
      //asert
		expect(response).toBe("542 -214");
    });
});


/*
  Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
  */


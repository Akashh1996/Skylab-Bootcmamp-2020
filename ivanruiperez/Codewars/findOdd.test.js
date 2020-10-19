const findOdd = require("./findOdd");

describe("Given an array of integers, find the one that appears an odd number of times", () => {
  test("should give odd number of times", () => {
    const a = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

    const response = findOdd(a);

    expect(response).toBe(5);
  });
  test("should give odd number of times", () => {
    //arrange
    const a = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
    //act
    const response = findOdd(a);
    //assert
    expect(response).toBe(-1);
  });
  test("should give odd number of times", () => {
    //arrange
    const a = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
    //act
    const response = findOdd(a);
    //assert
    expect(response).toBe(5);
  });
  test("should give odd number of times", () => {
    //arrange
    const a = [10];
    //act
    const response = findOdd(a);
    //assert
    expect(response).toBe(10);
  });
  test("should give odd number of times", () => {
    //arrange
    const a = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];
    //act
    const response = findOdd(a);
    //assert
    expect(response).toBe(10);
  });
  test("should give odd number of times", () => {
    //arrange
    const a = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];
    //act
    const response = findOdd(a);
    //assert
    expect(response).toBe(1);
  });
});

const highAndLow = require("./Highest_and_Lowest");

describe("highAndLow", () => {
  test("should return the highest and lowest number of an array", () => {
    let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";

    expect(highAndLow(numbers)).toBe("542 -214");
  });
});

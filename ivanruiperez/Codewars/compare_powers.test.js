const comparePowers = require("./compare_powers");

describe("comparePowers", () => {
  test("should return 1", () => {
    const arr1 = [2, 10];
    const arr2 = [2, 15];

    const response = comparePowers(arr1, arr2);

    expect(response).toBe(1);
  });
  test("should return 1", () => {
    const arr1 = [2, 10];
    const arr2 = [3, 10];

    const response = comparePowers(arr1, arr2);

    expect(response).toBe(1);
  });
  test("should return 0", () => {
    const arr1 = [2, 10];
    const arr2 = [2, 10];

    const response = comparePowers(arr1, arr2);

    expect(response).toBe(0);
  });
  test("should return -1", () => {
    const arr1 = [3, 9];
    const arr2 = [5, 6];

    const response = comparePowers(arr1, arr2);

    expect(response).toBe(-1);
  });
  test("should return -1", () => {
    const arr1 = [7, 7];
    const arr2 = [5, 8];
    const response = comparePowers(arr1, arr2);
    expect(response).toBe(-1);
  });
});

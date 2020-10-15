const sum = require("./sum")

describe("Sum", () => {
    test("should sum 1 + 2 equals 3", () => {
        expect(sum(1, 2)).toBe(3);
    })
    test("should sum 3 + 5 equals 8", () => {
        expect(sum(3, 5)).toBe(8);
    })
})
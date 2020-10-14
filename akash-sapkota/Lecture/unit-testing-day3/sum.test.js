const sum = require("./sum")

describe("sum", () => {
    test("sum 1 + 2 equals 3", () => {
        expect(sum(1, 2)).toBe(3)
    })

    test("sum 3 + 5 equals 3", () => {
        expect(sum(3, 5)).toBe(8)
    })
})
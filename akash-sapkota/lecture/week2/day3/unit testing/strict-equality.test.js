const checkStrictEquality = require("./sum")

describe("strict-equality", () => {
    test("1 and 1 equals true", () => {
        expect(checkStrictEquality(1, 1)).toBe(true)
    })
})
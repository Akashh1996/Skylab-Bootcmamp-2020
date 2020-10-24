const lowestProduct = require("./lowest-product")

describe("lowestProduct", () => {
    test("should check for lowest product of the last 4 digits", () => {
        expect(highestAndLowest("123456789")).toBe(24);
    });
})
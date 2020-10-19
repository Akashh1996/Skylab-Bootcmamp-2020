const highestAndLowest = require("./highest-and-lowest")

xdescribe("highestAndLowest", () => {
    test("should check for the highest and lowest numbers", () => {
        expect(highestAndLowest("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214");
    });
})
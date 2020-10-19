const pigIt = require("./simplePig");

describe("move letter", () => {
  test("", () => {
    const a = "Pig latin is cool";

    const response = pigIt(a);

    expect(response).toBe("igPay atinlay siay oolcay");
  });
});

const disemvowel = require("./DisemvowelTrolls");

test("delete vocals", () => {
  expect(disemvowel("This website is for losers LOL!")).toBe(
    "Ths wbst s fr lsrs LL!"
  );
});

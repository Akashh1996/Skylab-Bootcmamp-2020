const lowestProduct = require("./lowest_product");

test("Multiply for first numbers", () => {
  expect(lowestProduct("123456789")).toBe(24);
});
test("Multiply for first numbers", () => {
  expect(lowestProduct("234567899")).toBe(120);
});
test("Multiply for first numbers", () => {
  expect(lowestProduct("2345611117899")).toBe(1);
});
test("Multiply for first numbers", () => {
  expect(lowestProduct("333")).toBe("Number is too small");
});
test("Multiply for first numbers", () => {
  expect(lowestProduct("1234111")).toBe(4);
});

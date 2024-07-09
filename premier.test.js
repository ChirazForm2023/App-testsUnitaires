const premier = require("./premier");

test("2 is a prime number", () => {
  expect(premier(2)).toBe(true);
});

test("3 is a prime number", () => {
  expect(premier(3)).toBe(true);
});

test("4 is not a prime number", () => {
  expect(premier(4)).toBe(false);
});
test("1 is not a prime number", () => {
  expect(premier(1)).toBe(false);
});

test("-1 is not a prime number", () => {
  expect(premier(-1)).toBe(false);
});

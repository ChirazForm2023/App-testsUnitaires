const produit = require("./produit");

test("gives product of  2 and 3 equal to 6", () => {
  expect(produit(2, 3)).toBe(6);
});

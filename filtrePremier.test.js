const filtrePremier = require("./filtrePremier");

test("gives [13] as a result of filtrePremier on [1, 20, 13]", () => {
  expect(filtrePremier([1, 20, 13])).toEqual([13]);
});
test("gives [] as a result of filtrePremier on []", () => {
  expect(filtrePremier([])).toEqual([]);
});

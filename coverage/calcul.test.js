const calcul = require("./calcul");

describe("test sur la calculatrice", () => {
  it("should give 3 for 1+2", () => {
    expect(calcul(1, 2, "+")).toBe(3);
  });
  it("should give null for 1++", () => {
    expect(calcul(1, "+", "+")).toBe(null);
  });
  it("should give 3.34 for 10/3", () => {
    expect(calcul(10, 3, "/")).toBe(3.34);
  });
});

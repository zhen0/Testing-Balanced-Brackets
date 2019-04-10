const { expect } = require("chai");
const balancedBrackets = require("./balancedBrackets.js");

describe("balancedBrackets", () => {
  it("returns true when all brackets match", () => {
    expect(balancedBrackets("({[]})")).to.equal(true);
  });
  it("returns false when brackets are not matching", () => {
    expect(balancedBrackets("(}")).to.equal(false);
  });
  it("returns false when brackets are overlapping", () => {
    expect(balancedBrackets("([}]}")).to.equal(false);
  });
});

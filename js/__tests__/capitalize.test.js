const capitalize = require("../capitalize");

it("takes a string and returns it with the first character capitalized", () => {
  expect(capitalize("hide")).toBe("Hide");
});

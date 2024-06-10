const calculator = require("../calculator");

it("do basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.", () => {
  expect(calculator.add(25, 90)).toBe(115);
});
it("subtract", () => expect(calculator.subtract(565, 656)).toBe(-91));

it("divide", () => expect(calculator.divide(110, 10)).toBe(11));

it("multiply", () => expect(calculator.multiply(333, 3)).toBe(999));

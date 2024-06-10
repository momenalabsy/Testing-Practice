const caesarCipher = require("../caesarCipher");

it("takes a string and a shift factor and returns it with each character 'shifted'", () =>
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));

it("yes", () => expect(caesarCipher("abc", 3)).toBe("def"));
it("yes", () => expect(caesarCipher("XY22?ZW", 3)).toBe("AB22?CZ"));

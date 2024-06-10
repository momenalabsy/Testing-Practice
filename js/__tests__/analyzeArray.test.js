const analyzeArray = require("../analyzeArray");

it("takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
it("takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () =>
  expect(analyzeArray([0, 7, 3, 4, 76, 6])).toEqual({
    average: 16,
    min: 0,
    max: 76,
    length: 6,
  }));

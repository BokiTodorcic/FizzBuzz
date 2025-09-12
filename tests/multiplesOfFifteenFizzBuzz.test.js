const fizzbuzz = require("../src/fizzbuzz.js");

// Testing results for only FizzBuzz - I.e. only multiples of 3 and 5

test("return Buzz for position 15", () => {
  let position = 15;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FizzBuzz");
});

test("return Buzz for position 45", () => {
  let position = 45;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FizzBuzz");
});

test("return Buzz for position 75", () => {
  let position = 75;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FizzBuzz");
});

test("return Buzz for position 120", () => {
  let position = 120;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FizzBuzz");
});

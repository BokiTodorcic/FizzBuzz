import fizzbuzz from "../src/fizzbuzz.js";

// Testing results for only Buzz - I.e. only multiples of 5
test("return Buzz for position 5", () => {
  let position = 5;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Buzz");
});

test("return Buzz for position 10", () => {
  let position = 10;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Buzz");
});

test("return Buzz for position 25", () => {
  let position = 25;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Buzz");
});

test("return Buzz for position 85", () => {
  let position = 85;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Buzz");
});

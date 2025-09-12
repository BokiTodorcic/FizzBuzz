import fizzbuzz from "../src/fizzbuzz.js";

// Testing results for only Fizz - I.e. only multiples of 3
test("return Fizz for position 3", () => {
  let position = 3;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Fizz");
});

test("return Fizz for position 6", () => {
  let position = 6;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Fizz");
});

test("return Fizz for position 9", () => {
  let position = 9;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Fizz");
});

test("return Fizz for position 12", () => {
  let position = 12;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Fizz");
});

test("return Fizz for position 24", () => {
  let position = 24;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Fizz");
});

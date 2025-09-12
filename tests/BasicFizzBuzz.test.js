const fizzbuzz = require("../src/fizzbuzz.js");

// Testing resuts with no words
test("return 1 for position 1", () => {
  let position = 1;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual(position);
});

test("return 2 for position 2", () => {
  let position = 2;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual(position);
});

test("return 19 for position 19", () => {
  let position = 19;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual(position);
});
10
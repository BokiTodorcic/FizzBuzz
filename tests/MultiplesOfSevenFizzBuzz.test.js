import fizzbuzz from "../src/fizzbuzz.js";

// Testing resuts for Bang - I.e. multiples of 7
test("return Bang for position 7", () => {
  let position = 7;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Bang");
});

test("return Bang for position 14", () => {
  let position = 14;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Bang");
});

test("return FizzBang for position 21", () => {
  let position = 21;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FizzBang");
});


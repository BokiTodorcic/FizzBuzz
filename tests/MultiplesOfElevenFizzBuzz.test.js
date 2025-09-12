import fizzbuzz from "../src/fizzbuzz.js";

// Testing resuts for Bong - I.e. multiples of 11
test("return Bong for position 7", () => {
  let position = 11;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Bong");
});

test("return Bong for position 22", () => {
  let position = 22;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Bong");
});

test("return Bong for position 33", () => {
  let position = 33;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Bong");
});

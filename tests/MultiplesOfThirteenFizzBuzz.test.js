import fizzbuzz from "../src/fizzbuzz.js";

// Testing resuts for Fezz - I.e. multiples of 13
test("return Fezz for position 13", () => {
  let position = 13;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("Fezz");
});

test("return FezzBuzz for position 65", () => {
  let position = 65;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FezzBuzz");
});

test("return FizzFezzBuzz for position 195", () => {
  let position = 195;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FizzFezzBuzz");
});

test("return FezzBong for position 143", () => {
  let position = 143;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("FezzBong");
});

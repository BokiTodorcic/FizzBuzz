import fizzbuzz from "../src/fizzbuzz.js";

// Testing resuts for multiples of 17
test("return BuzzFizz for position 255", () => {
  let position = 255;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("BuzzFizz");
});

test("return BuzzFezzFizz for position 3315", () => {
  let position = 3315;
  const resultArray = fizzbuzz(position);
  expect(resultArray[position - 1]).toEqual("BuzzFezzFizz");
});

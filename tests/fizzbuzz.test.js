const fizzbuzz = require("../src/fizzbuzz.js");

test("return result for position 1", () => {
  const resultArray = fizzbuzz(1);
  expect(resultArray[0].toBe(1));
});

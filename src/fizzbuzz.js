// This is our main function
export default function fizzbuzz(position) {
  let resultArray = [];

  for (let i = 1; i <= position; i++) {
    let value = "";

    if (i % 11 === 0) {
      i % 13 === 0 ? (value = "FezzBong") : (value = "Bong");
      resultArray.push(value);
      continue;
    } else if (i % 15 === 0) {
      if (i % 13 === 0) {
        value = "FizzFezzBuzz";
      } else {
        value = "FizzBuzz";
      }
    } else if (i % 5 === 0) {
      if (i % 13 === 0) {
        value = "FezzBuzz";
      } else {
        value = "Buzz";
      }
    } else if (i % 3 === 0) {
      if (i % 13 === 0) {
        value = "FizzFezz";
      } else {
        value = "Fizz";
      }
    } else if (i % 7 === 0) {
      if (i % 13 === 0) {
        value = "FezzBang";
      } else {
        value = "Bang";
      }
    } else {
      value = i;
    }

    if (value && value !== "Bang" && i % 7 === 0) {
      value += "Bang";
    }

    if (i % 17 === 0 && typeof value === "string") {
      let tempArr = value.match(/.{4}/g);
      value = tempArr.reverse().join("");
    }

    resultArray.push(value);
  }
  return resultArray;
}

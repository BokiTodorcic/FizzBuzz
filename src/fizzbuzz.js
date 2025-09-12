// This is our main function
export default function fizzbuzz(position) {
  let resultArray = [];

  for (let i = 1; i <= position; i++) {
    let value = [];

    if (i % 3 === 0) {
      value.push("Fizz");
    }

    if (i % 13 === 0) {
      value.push("Fezz");
    }

    if (i % 5 === 0) {
      value.push("Buzz");
    }

    if (i % 7 === 0) {
      value.push("Bang");
    }

    if (i % 11 === 0 && i % 13 === 0) {
      value.push("Bong");
    } else if (i % 11 === 0) {
      value = ["Bong"];
    }

    if (value.length === 0) {
      value.push(i);
    }

    if (i % 17 === 0) {
      const result = value.reverse().join("");
      resultArray.push(result);
    } else {
      const result = value.join("");
      resultArray.push(result);
    }
  }

  return resultArray;
}

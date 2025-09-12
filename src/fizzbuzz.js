// This is our main function
export default function fizzbuzz(position) {
  let resultArray = [];

  for (let i = 1; i <= position; i++) {
    let value = [];

    // if (i % 11 === 0) {
    //   i % 13 === 0 ? (value = "FezzBong") : (value = "Bong");
    //   resultArray.push(value);
    //   continue;
    // } else if (i % 15 === 0) {
    //   if (i % 13 === 0) {
    //     value.push("FizzFezzBuzz");
    //   } else {
    //     value.push("FizzBuzz");
    //   }
    // } else if (i % 5 === 0) {
    //   if (i % 13 === 0) {
    //     value.push("FezzBuzz");
    //   } else {
    //     value.push("Buzz")
    //   }
    // } else if (i % 3 === 0) {
    //   if (i % 13 === 0) {
    //     value.push("FizzFezz");
    //   } else {
    //     value.push("Fizz");
    //   }
    // } else if (i % 7 === 0) {
    //   if (i % 13 === 0) {
    //     value.push("FezzBang");
    //   } else {
    //     value.push("Bang");
    //   }
    // } else {
    //   value.push(String(i));
    //   console.log(value);
    // }

    // if (value && value !== "Bang" && i % 7 === 0) {
    //   value += "Bang";
    // }

    // if (i % 17 === 0 && typeof value === "string") {
    //   let tempArr = value.match(/.{4}/g);
    //   value = tempArr.reverse().join();
    // }

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

    const result = value.join("");
    resultArray.push(result);
  }

  return resultArray;
}

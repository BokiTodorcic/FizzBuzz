// This is our main function
function fizzbuzz() {
  for (let i = 1; i <= 255; i++) {
    let text = "";

    if (i % 11 === 0) {
      i % 13 === 0 ? (text = "FezzBong") : (text = "Bong");
      console.log(text);
      continue;
    } else if (i % 15 === 0) {
      if (i % 13 === 0) {
        text = "FizzFezzBuzz";
      } else {
        text = "FizzBuzz";
      }
    } else if (i % 5 === 0) {
      if (i % 13 === 0) {
        text = "FezzBuzz";
      } else {
        text = "Buzz";
      }
    } else if (i % 3 === 0) {
      if (i % 13 === 0) {
        text = "FizzFezz";
      } else {
        text = "Fizz";
      }
    } else if (i % 7 === 0) {
      if (i % 13 === 0) {
        text = "FezzBang";
      } else {
        text = "Bang";
      }
    } else {
      text = i;
    }

    if (text && text !== "Bang" && i % 7 === 0) {
      text += "Bang";
    }

    if (i % 17 === 0 && typeof text === "string") {
      let tempArr = text.match(/.{4}/g);
      text = tempArr.reverse().join("");
    }

    console.log(text);
  }
}

module.exports = fizzbuzz;

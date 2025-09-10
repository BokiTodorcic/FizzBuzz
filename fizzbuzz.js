// This is our main function
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let text = "";

    if (i % 11 === 0) {
      text = "Bong";
      console.log(text);
      continue;
    } else if (i % 15 === 0) {
      text = "FizzBuzz";
    } else if (i % 5 === 0) {
      text = "Buzz";
    } else if (i % 3 === 0) {
      text = "Fizz";
    } else if (i % 7 === 0) {
      text = "Bang";
    } else {
      text = i;
    }

    if (text && text !== "Bang" && i % 7 === 0) {
      text += "Bang";
    }

    console.log(text);
  }
}

// Now, we run the main function:
fizzbuzz();

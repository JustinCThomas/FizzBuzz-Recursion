let x = 100;
let counterStart = 1;

function fizzBuzz(val, counter) {
  let message = "";
  if (val === 0) {
    return ;
  }
  if (counter % 3 === 0) {
    message += "Fizz";
  }
  if (counter % 5 === 0) {
    message += "Buzz";
  }
  if (message !== "") {
    console.log(`${counter}: ${message}`);
  }
  return fizzBuzz(val - 1, counter + 1);
}

fizzBuzz(x, counterStart);

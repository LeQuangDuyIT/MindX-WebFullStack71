const fizzBuzz = () => {
  let string = '';
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
      string = string + 'Fizz';
    }
    if (i % 5 === 0) {
      string = string + 'Buzz';
    }
  }
  return string;
};

console.log(fizzBuzz());

const fizzBuzzBetterWay = () => {
  let string = '';
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      string += 'FizzBuzz';
    } else if (i % 3 === 0) {
      string += 'Fizz';
    } else if (i % 5 === 0) {
      string += 'Buzz';
    }
  }
  return string;
};

console.log(fizzBuzzBetterWay());

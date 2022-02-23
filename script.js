const stringLength = (string) => {
  const stringLength = string.length;
  if (stringLength > 10) {
    throw new Error('string length is greater than 10');
  } else if (stringLength < 1) {
    throw new Error('string length is less than 1');
  }
  return stringLength;
}

const reverseString = (string) => {
  const reversed = string.split('').reverse().join('');
  return reversed;
}

class calculator {
  add = (a,b) => a + b;
  subtract = (a,b) => a - b;
  multiply = (a,b) => a * b;
  divide = (a,b) => a / b;
}

const capitalizeString = (string) => {
  const splited = string[0].toUpperCase() + string.slice(1);
  return splited;
};

module.exports = { reverseString, stringLength, calculator, capitalizeString };
////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * function that has 2 parameters and returns the lowest number
 * I: 2 params both numbers
 * O: 1 number the lowest of the two arguments
 */

function min(num1, num2) {
  // if num1 is less than num2 return num1
  if (num1 < num2) return num1
  // if num1 is greater than num2 return num2
  else if (num1 > num2) return num2;
  // if they are the same return num1;
  else if (num1 === num2) return num1;
}

// console.log(min(0, 10));

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 *  takes a whole positive number and returns a boolean value if the number is even
 * I: 1 param a positive number
 * O: boolean value
 * C: number is positive
 */

function isEven(num) {
  // if num is 0 then return true
  if (num === 0) return true;
  // if num is 1 then return false
  else if (num === 1) return false;
  // if num is less than or equal to -1 then return the fuction isEven
  else if (num <= -1) {
    // run the function adding two each time until the number is 0 or 1
    return isEven(num + 2);
  }
  // if the num is greater than 1 run the function isEven
  else {
    // return the function subtracting two each time until the number is either 0 or 1
    return isEven(num - 2) 
  }
}

// console.log(isEven(-2));

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * takes a string and counts the amount of characters in that string. 
 * I: 2 params a string and a character to count in the string
 * O: a number of the amount of times the character is in the string
 */

function countChars(string, letter) {
  // declare a count variable
  let count = 0;
  // loop over the string
  for (let i = 0; i < string.length; i++) {
    // if the index of string is equal to letter then add one to count
    if (string[i] === letter) count += 1;
  }
  return count;
}

console.log(countChars('hello world', 'o')) // => 2

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * takes one param a string
 * counts how many times a capital B is in the string
 * I: a string
 * O: a number
 */

function countBs(string) {
  // declare a count variable
  let count = 0;
  // loop over the string
  for (let i = 0; i < string.length; i++) {
    // if the index in the string is B then add one to count
    if (string[i] === 'B') {
      count += 1;
    }
  }
  return count;
}

// console.log(countBs('aBADBOYBOBby')); // expected output of 4

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};

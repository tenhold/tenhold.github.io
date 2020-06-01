// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

// input: string
// output: string reveresed ie "hello" returns "olleh";
// Using for in loop, looping through 
// function reverseString(input) {
//     // YOUR CODE GOES BELOW HERE //
//   const inputRev = []; // creates an empy array to store the string
//   for (let char in input) {
//     inputRev.unshift(input[char]); // looping through the string and putting the letter in reverse order into the inputRev array
//   }  
//   return inputRev.join(''); // returning the array and joining it together to return a string.
    
    
//     // YOUR CODE GOES ABOVE HERE //
// }

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
  const inputArr = []; // creates an empy array to store the string
  const inputRev = [];
  for (let i = 0; i < input.length; i++) {
    inputArr.push(input[i]); // looping through the string and putting the letter in reverse order into the inputRev array
  } 
  for (let i = inputArr.length - 1; i >= 0; i--) {
    inputRev.push(inputArr[i]);
  }
  return inputRev.join(''); // returning the array and joining it together to return a string.
    
    
    // YOUR CODE GOES ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 // input: two numbers a start number and an end number
 // output: array of all the numbers in order.

function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // declare an array literal
    // use a if / else if flow to decide if the start number is larger than the end number
    let numArray = [];
    if (start < end) {
        // for loop that starts at the start num and ends a the end num
        for (let i = start; i <= end; i++) {
            numArray.push(i);
        }
      return numArray;  
    } else if (start > end) {
        // for loop that reverses and prints the numbers in reverse order
        for (let i = start; i >= end; i--) {
            numArray.push(i);
        }
      return numArray;
    } else {
        return 'please use numbers';
    }
    // YOUR CODE GOES ABOVE HERE //
}

console.log(range(5, 10));
console.log(range(5, 0));
console.log(range('hello', 'world'));




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
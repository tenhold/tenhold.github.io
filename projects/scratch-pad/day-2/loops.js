// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 
 // input: array
 // output: n/a prints each value of the array looped to the console
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let i = 0; i < array.length; i++) { // using a for loop that starts at 0, ends at the last value in the array and increments 1 each time
    console.log(array[i]); // prints the data at each index
  }
  
  // YOUR CODE ABOVE HERE //
}

const numArr = [1,2,3,4,5,6,7,8,9];

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 
 // input: an array
 // output: n/a prints the array in reverse order to the console
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (let i = array.length - 1; i >= 0; i--) { // using a for loop starting at the end of the array, stopping at index 0 of the array, and decrementing one each time
    console.log(array[i]); // prints the data at each index, this time reverse. 
  }
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 
 // input: object
 // output: array with the object keys
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  let objArray = []; // delcare an array literal to store the keys from the object
  for (let key in object) { // for in loop to loop through the object that we are passing into the function
    objArray.push(key); // pushing each key value into the objArray we've created in the function
  }
  return objArray; // returning the array with all the key values push into it
  
  // YOUR CODE ABOVE HERE //
}

const me = {
  firstName: 'Jon',
  lastName: 'Tenholder',
  age: 33,
  likes: ['photography', 'coding', 'biking']
};


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
 // input: object
 // output: n/a prints the keys from the object to the console
 
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
 for (let key in object) { // for in loop looping through the object
   console.log(key); // prints each key to the console
 } 
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 
// input: object
// output: an array of the objects values

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  let objValArray = []; // delcare an array literal to store our values from the object
  for (let key in object) { // create a for loop in the object
    objValArray.push(object[key]); // pushing the values from the object into the array we declared outside the for in loop
  }  
  return objValArray; // returns the new array with all the values from the object outside of the function.
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 
 // input: object
 // output: n/a prints the values from the obect to the console
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for(let key in object) { // for in loop looping through the object 
    console.log(object[key]); // prints the values of the object to the console.
  }
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
 
 // input: object
 // output: one number, the total key/value pairs inside the object
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  let objArray = []; // declare an array literal to store the keys of the object
  for (let key in object) { // for in loop looping through the object
    objArray.push(key); // pushing the keys from the obect into the array we declared above the for in loop
  }
  return objArray.length; // returning the length of the new array that is storing the key value from our object
  
  // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 
  // input: object
  // output: n/a the object printed to the console in reverse
 
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  let arrRev = []; // create an array literal to store the values of the object
  for (let key in object) { // loop through the object
    arrRev.push(object[key]); // push the values from the object in to the array
  }
  for (let i = arrRev.length - 1; i >= 0; i--) { // loop thought the array in reverse
    console.log(arrRev[i]); // each time print the value to the console
  }
  // YOUR CODE ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

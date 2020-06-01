// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 
 // input: a value or string
 // output: boolean value true if an array false if not
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // control flow if statement
    if (Array.isArray(value)) { // if the value is an array
        return true; // returns true
    } else { // if not false
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

const arr = [1,2,3,4,5,6];

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */

//input: any value;
// output: boolean value
// C/E: typeof operator will return 'object' for array, null, objects and dates

function isObject(value) {
   // YOUR CODE BELOW HERE //
   // Check to see if the value is not an array
    if (Array.isArray(value)) {
        return false;
    } else if (value === null) { // check if its null 
        return false;
    } else if (value instanceof Date) { // check if it's a date
        return false;
    } else if (typeof value === 'object') { // check to see if its an object
        return true;
    } else {
        return false;
    }
   
   // YOUR CODE ABOVE HERE //
}

console.log('object?', isObject(null));

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (value === null) { // checking to see if value is null 
        return false;
    } else if (value instanceof Date) { // checking for a Date
        return false;
    } else if (value === Array.isArray) { // checking if value is an array
        return true;
    } else if (typeof value === 'object') { // checking if value is an object
        return true;
    } else { // anything else return false
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}
    
 
 
 
 
// function isCollection(value) {
//     // YOUR CODE BELOW HERE //
//     if (isArray(value) || isObject(value) === true) {
//         return true;
//     } else {
//         return false;
//     }

    

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 
 function typeOf(value) {
     
    if (value === null) { // checking for null
        return 'null';
    } else if (value instanceof Date) { // checking for date
        return 'date';
    } else if (Array.isArray(value)) { // checking for array
        return 'array';
    } else if (typeof value === 'object') { // checking for object
        return 'object';
    } else { // else return built in typeof functions.
        return typeof value;
    }
     
 };
 
 console.log('typeOf', typeOf([]))
 
 
 
 
 
 

// function typeOf(value) {
//     // YOUR CODE BELOW HERE //
    
//     // check if array
//     if (isArray(value)) {
//         return 'array';
//     } else if (isObject(value)) {
//         return 'object';
//     // check if object
//     } else if (value === null) { // check if null
//         return 'null';
//     } else if (value instanceof Date) {
//         return 'date';
//     } else {
//         return typeof value;
//     }
//     // check if date
//     // else use native type of operator
    
//     // YOUR CODE ABOVE HERE //
// }

let yo = true; 

console.log(typeof NaN)
console.log(typeof(yo));

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

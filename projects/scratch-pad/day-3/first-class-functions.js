// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
 // input: a string or number as a base
 // output: a function that tests if the value is greater than the base
 
 // the base will be the first function. I then will return a function to test against the base
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) { // returns an function that has a value you want to compaire with the base
        if (value > base) { // if the value is greater than the base
            return true; // return true
        } else {
            return false; // return false
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
 // input: a string or number base to test with the function inside
 // output: a function that takes a value, we can then compare with the base parameter.
 
 // I want to have the function pass in a base number. when I assign the function to a variable I want to pass another value into the created variable to test if
 // that is less than the base value.
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value) { // anonymous function that takes one parameter
        if (value < base) { // runs a control flow to see if the value is less than the base
            return true;
        } else {
            return false; // if not it returns false
        }
    }   
    
    // YOUR CODE ABOVE HERE //
}

const num4 = createLessThanFilter(4);

const num2 = num4(2);



/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 // input: 1 paramater of 1 character 
 // output: a function that takes a string, which we will test the first character of that string with the startsWith function
 // edge case: if the user inputs more than one letter
 
 // Function should return a string that will compare with the createStartsWithFilter parameter.
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(word) { // anonymous function that takes one parameter a string
        const lowerCaseWord = word.toLowerCase(); // converts the string to all lower case
        const lowerCaseStartWith = startsWith.toLowerCase(); // converts the single character to all lower case.
        if (lowerCaseWord[0] === lowerCaseStartWith[0]) { // compares the two values
            return true; // returns true
        } else {
            return false; // if not returns false
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

const jStartsWith = createStartsWithFilter('jez');

const myName = 'Jon';

const dog = 'Sol'
console.log(jStartsWith(myName))
/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
 // input: one parameter that is one character
 // output: a function that compares the one prameter with a word that was passed in
 // edge case: if the user inputs more than one letter
 
 // function should return a function that compares the last letter of a word with the endsWith parameter
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(word) {
        const lowerWord = word.toLowerCase();
        const lowerEndsWith = endsWith.toLowerCase();
        if (lowerWord[lowerWord.length - 1] === lowerEndsWith[0]) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 // input: two parameters an array of strings and a function to modify the strings
 // output: the strings modifed by the modifier function
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    const modifedArr = []; // create an array literal to store the modified strings
    for (let i = 0; i < strings.length; i++) { // loop though the array to get access to each string
        modifedArr.push(modify(strings[i])); // push the modify function of each string into the empty array
    }
    return modifedArr; // return the modified array
    
    // YOUR CODE ABOVE HERE //
}

const letters = ['a', 'b', 'c'];
const modArr = string => {
    return string.toUpperCase();
}
const addE = string => {
    return string + 'e';
}

// console.log(modifyStrings(letters, modArr));
// console.log(modifyStrings(letters, addE));

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 // input: two parameters, an array and a function
 // output: boolean value, true if the array matches the test false if it fails.
 
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // create a for loop though the strings array
    // create two variables to store pass fail for the test
    let testPass = 0;
    let testFail = 0;
     // create a for loop though the strings array
    for (let i = 0; i < strings.length; i++) {
        // create an if / else if to see if the test will pass or fail
        if (test(strings[i])) { // if the test passes add one to the test pass variable 
            testPass++;
        } else { // if test fails then add one to the test fail variable
            testFail++;
        }
    }
    // Use another if / else if control flow to see if the test passed or failed.
    if (testFail > 0) {
        return false; // if fail has any marks then the test failed
    } else {
        return true;
    }
    // YOUR CODE ABOVE HERE //
}


// function allStringsPass2(strings, test) {
//     // YOUR CODE BELOW HERE //
    
//     for (let i = 0; i < strings.length; i++) {
//         // if the string does not pass the test return false
//         // call the test function, passing in an individual string as its argument
//         if(test(strings[i]) === false) {
//             return false;
//         }
//     }
//     return true;
//     // YOUR CODE ABOVE HERE //
// }


const startsWithC = ['cat', 'pow', 'car'];
const cTest = string => {
    if (string[0].toLowerCase() === 'c') {
        return true;
    } else {
        return false;
    }
}

console.log(allStringsPass(startsWithC, cTest));

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
 
 // return a strings length 
 
function length(string) {
    // YOUR CODE BELOW HERE //
    
    return string.length; // counts the amount of characters in the inputed string

    // YOUR CODE ABOVE HERE //
}

console.log(length('Hello'));

/**
 * Given an input String, return a new String forced to lowercase.
 */
 
 // return a string that forces all characers to lower case
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase(); // takes the input string and makes every character lowercase.

    // YOUR CODE ABOVE HERE //
}

console.log(toLowerCase('HELLO WORLD'));

/**
 * Given an input String, return a new String forced to uppercase.
 */
 
 // return a string that forces all characers to upper case
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toUpperCase(); // takes the input string and maeks every character uppercase.

    // YOUR CODE ABOVE HERE //
}

console.log(toUpperCase('hello world x 2'));

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
 
 // input: string of words
 // output: string of words with no spaces and dashes instead and no uppercased words.
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
    let newString = string.split(' '); // declares an array from the string we inputed into the function
    return newString.join('-').toLowerCase(); // takes that array joins it with dashes to create a string and at the same time coverts all characters to lowercase.
    
    // YOUR CODE ABOVE HERE //
}

console.log(toDashCase('I am having fun')); // prints i-am-having-fun;

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
 // input: 2 parameters, one string and a single character
 // output: boolean value baised on if the char is the same as the first letter in the string.
 
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    const stringLower = string.toLowerCase(); // creates a new string of lowercase characters from our input string
    const charLower = char.toLowerCase(); // creates a new string of a lowercase character from out input character
    if (stringLower[0] === charLower) { // checking to see if the first letter of the string is directly equal to the character
        return true; // if they are directly equal then we return the true value
    } else {
        return false; // if not false is returned
    }
    

    // YOUR CODE ABOVE HERE //
}

console.log(beginsWith('Jon', 'j'));
console.log(beginsWith('Hello', 'h'));


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
 // input: 2 parameters, 1 string, 1 single letter
 // output: a boolean value baised on if the single character is the same as the last letter in the string
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    const stringLower = string.toLowerCase(); // creates a new string of lowercase characters from our input string
    const charLower = char.toLowerCase(); // creates a new string of a lowercase character from out input character
    if (stringLower[stringLower.length - 1] === charLower) { // checking to see if the last letter of the string is directly equal to the character
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

console.log(endsWith('Max', 'X'));
console.log(endsWith('Hello', 'g'));


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
 
 // input: 2 paramters, both strings
 // output: one single string.
 
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    return stringOne + stringTwo; // concatanating two strings together and returning it.

    // YOUR CODE ABOVE HERE //
}

console.log(concat('Hello', 'World'));

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 
 // input: at least 2 strings but could be more.
 // output: all the strings joined together without spaces.
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments); 
    return args.join(''); // joining the array into a string and returning it.

    // YOUR CODE ABOVE HERE //
}

console.log(join('my', 'name', 'is', 'Ben'));

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
 
 // input: 2 parameters both strings
 // output: 1 string that is the longest
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) { // if the length of the first string is longer than the length of the second string
        return stringOne; // then we return the first string
    } else {
        return stringTwo; // if that is false then we return the second string.
    }

    // YOUR CODE ABOVE HERE //
}

console.log(longest('Jon', 'Tenholder'));

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 
 // input: 2 parameters both strings.
 // output: 1 of the first is higher in alphabetical order, -1 if the second is higher, 0 if equal
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  const stringOneArr = stringOne.split(''); // declaring an array from the string one spilt by each character 
  const stringTwoArr= stringTwo.split(''); // declaring an array from the string two spilt by each character 
  let val = 0; // delcaring a variable that we can change depending on the boolean statment
  stringOneArr.forEach(letter => { // looping through the first string and comparing it to string two
    if (stringOneArr < stringTwoArr) { // if string one is less than string two
      val = 1; // redeclare our value to 1
    };
    
    if (stringOneArr > stringTwoArr) { // if string one is greater than string two
      val = -1; // redeclare out value to -1
    } 
    });
    return val; // returning the value if it wasn't redeclared it will stay at 0;
    // YOUR CODE ABOVE HERE //
}



console.log(sortAscending('b', 'a'));
console.log(sortAscending('abc', 'acc'));



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 
 // input: two strings
 // output: 1 if the first string is lower in alphabetical order, 0 if they are the same and -1 if the second string is lower.
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE // 
    const stringOneArr = stringOne.split(''); // declaring an array from the string one spilt by each character 
    const stringTwoArr = stringTwo.split('');// declaring an array from the string two spilt by each character 
    let val = 0; // delcaring a variable that we can change depending on the boolean statment
    stringTwoArr.forEach(letter => { // looping through the second string and comparing it to string one
        if (stringTwoArr < stringOneArr) {
            val = 1;
        };
        
        if (stringTwoArr > stringOneArr) {
            val = -1;
        };
    });
    return val;
    // YOUR CODE ABOVE HERE // 
}


// function sortDescending(stringOne, stringTwo) {
//     // YOUR CODE BELOW HERE //
//     return stringOne.localeCompare(stringTwo);

//     // YOUR CODE ABOVE HERE //
// }


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}

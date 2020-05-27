/** With Operators
 * Using the + operator you can concatenate strings together. You can also use
 * the += to do the same thing
*/

let str1 = 'Hello';
let str2 = 'World';

const string = str1 + ' ' + str2;

console.log(string); // prints 'Hello World'

let snake = 'ssss';
snake += 'S';
snake += 'S';

console.log(snake); // prints 'sssssSS'

/** With String Methods
 * there are build in methods within javascript that allow us to understand
 * strings and get different values from them.
*/

// using the .length method to  find the length of the string
console.log(str1.length) // prints 5;
console.log(str1[0]); // prints 'H'

// using the .toLowerCase() method to make all characters in the string lowercase
console.log(string.toLowerCase()); // prints 'hello world';
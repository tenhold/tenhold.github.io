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
console.log(snake.repeat(3)) // prints 'sssssSSsssssSSsssssSS';

/** With String Methods
 * there are build in methods within javascript that allow us to understand
 * strings and get different values from them.
 * .length can also be used to find out how long the string is.
 * .slice(start, end) is a method to cut off some parts of the string. You
 * have a start point and an end point. 
 * .charAt(num) is a method that will return whatever characer is at that 
 * index point in the string.
 * .toUpperCase() will capitalize all the characters in the string
 * .toLowerCase() will lowercase all the characters in the string. Both are 
 * good for when you are trying to compair values but your not sure on the case
 * of each letter
 * .trim() will take the spaces off both the front and back of the string.
 * .repeat(num) will repeat the string x amount of times 
*/

// using the .length method to  find the length of the string
console.log(str1.length) // prints 5;
console.log(str1[0]); // prints 'H'
let firstName = 'Jon'
console.log(firstName.toUpperCase()); // prints "JON"
console.log(firstName.toLowerCase()); // prints 'jon'
let wideSpaces = '       What in the world?           ';
console.log(wideSpaces.trim()) // prints 'What in the world?'
console.log(firstName.charAt(2)); // prints n



// using the .toLowerCase() method to make all characters in the string lowercase
console.log(string.toLowerCase()); // prints 'hello world';
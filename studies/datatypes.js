// 1. Number
// can be decimals, numbers and negative numbers.
let x = 5; 
console.log(x); // positive number example
let y = 0.5;
console.log(y); // decimal number example. can't start with .
let z = -5;
console.log(z); // negative num example.


// 2. Strings
// strings can be text or numbers but must be wrapped in either '' or ""
let str1 = 'Hello';
let str2 = "World";
let strNum = '55' // not the same as a number
console.log(str1 + ' ' + str2);

// 3. Boolean
// boolean is a logical data type that is either true or false, 
// not wrapped in '' or ""
let bool = true;
if (1 < 2) {
    console.log(true);
} else {
    console.log(false);
};

// 4. Array
/** Array is a complex data type wrapped in brackets [ ] that can store multiple data
 * in one variable. Array's are index based that you can find data
 * using brackets. The first index is 0.
 * they are mutable ie can use built in functions to add or remove from
 * an array
 * .push(value) adds to the end of an array
 * .pop() removes from the end of an array
 * .unshift(value) adds to the front of an array
 * .shift() removes from the front of an array
*/
const arr = [];                                     // array literal
const arrStr = ['Hello', 'World', 'and', 'Jon'];    // array of strings
console.log('arrStr: ' + arrStr[3]);                // prints Jon
const arrNum = [1,2,3,4,5];
console.log(arrNum[1] + arrNum[3]);                 // prints 6 (2+4)
arrNum.push(6, 7, 8);
console.log(arrNum)                                 // prints [1,2,3,4,5,6,7,8];
arrNum.pop() 
console.log(arrNum)                                 // prints [1,2,3,4,5,6,7];
arrNum.unshift(0) 
console.log(arrNum)                                 // prints [0,1,2,3,4,5,6,7];
arrNum.shift() 
console.log(arrNum)                                 // prints [1,2,3,4,5,6,7];

// 5. Object
/** Object is also a complex data type wrapped in curley braces { } that has a key / value properties.
 * Objects do not have indexes. You can use dot notation or bracket notation
 * to get values from the object
*/

const obj = {}                                      // object literal
const meals = {
    breakfast: 'eggs',
    lunch: ['sandwich', 'chips', 'water'],
    dinner: false
}

meals.snack = 'almonds';

console.log(meals);

// 6. undefined
// Value assigned to variables that haven't been defined yet.
// Not the same as an error.

let name; // will return undefined.

console.log(`My name is ${name}`);

// 7. null
/** intentional absence of any value. Is falsy in boolean values.
 * Null and undefined are not the same. Javascript automatically assigns
 * undefined but null has to be assigned by the user.
 * Null is also used as a zero in mathematical operations.
 **/

const n = null;

console.log(2 + null);                      // prints 2 (2 + 0).
console.log(null);                          // prints null 
console.log(null === true);                 // prints false because null === false.

// 8. NaN (Not a Number)
// This is not an error but when you try and use math on something that isn't a number.

const heightNow = "5' 7\"";
const heightChild = "3' 10\"";

const growth = heightNow - heightChild;
console.log(growth); 
// prints NaN because the height is written as strings there for can't be subtracted.

/** 9. Infinity and -Infinity
 * Infinity is a variable in the global scope. Greater than any other 
 * number. -Infinity is the opposite of infinity and is less than any 
 * other number
 * */
 
 const bigNumber = Infinity;
 console.log(bigNumber) // print Infinity;
 
 if (10000 < Infinity) {
     console.log('To Infinity and beyond!'); // prints 'to infinity and beyond'
 }

if (-10000 > -Infinity) {
    console.log('such a small number'); // prints 'such a small number';
}

/** Primitive and Complex data types
 * The main difference between primitive and complex data types is that
 * primitive are immutable and complex are mutable. Basically complex
 * data ie, arrays and objects can store multiple types of primitive data.
 * 
 * Complex data is passed by reference meaning that if we assign an already 
 * declared variable to a new variable if we change that newly created 
 * variable then we also affect the original variable created.
 * 
 * Primitive values on the other hand are copied. So if we assign a new variable
 * to an already assigned variable and update it then it won't effect the original 
 * variable
 * Primitive values also take up a set amount of memory
*/

// example of copy
let nameLast = 'Klumpp';
let newLastName = nameLast; // creating a copy of nameLast stored to a new var
newLastName = 'Tenholder'; // reassigning the variable but won't affect nameLast
console.log(nameLast); // prints 'Klumpp'
console.log(newLastName); // prints 'Tenholder'

// example of reference
let specialNums = [7, 13, 41, 55]; // declaring an array with numbers
let newNums = specialNums; // creating a reference of the speicalNums array
newNums.pop(); // removing the last index on newNums
console.log(`newNums: ${newNums}`); // prints [7, 13, 41];
console.log(`specialNums: ${specialNums}`); // also prints [7, 13, 41] because it didn't
// copy it just created a reference.

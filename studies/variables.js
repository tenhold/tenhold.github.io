/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

// myName isn't defined and will print undefined if we log it to the console.

console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'Jon';
console.log(myName); // prints => Jon

// 3. re-assignment //
myName = 'Paige';
console.log(myName); // prints => Paige

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 2. var, let, const 
// var is pre JS 6. var is either globally scoped or function scoped. 

// var example
var num = 10;
console.log(num); // prints 10;

// let and const are preferable to use becasue the can be blocked scoped unlike var 
// let also allows you to re-assign the variable const can't re-asign.

let lastName = 'Klumpp';
console.log(`lastName: ${lastName}`); // prints Klumpp
// re-asigning let
lastName = 'Tenholder';
console.log(`lastName: ${lastName}`); // prints Tenholder

// example of let in block scoped
function size(x) {
    if (x < 10) {
        let num = 100;
        console.log(`num: ${num}`);
    } else if (x >= 10) {
        let num = 200;
        console.log(`num: ${num}`)
    }
}    

size(1) // prints 100;
size(12) // prints 200 but dosen't throw an error because it can't refrence the other let num.

// const can not be re-assigned

const dog = 'Solomon';
console.log(dog); // prints Solomon
/* 
dog = 'Barko'; // throws an error becasue dog has already be assigned to 'Solomon'.
*/

// 3. HOSTING
/* hosting happens if you reference a variable before 
 * you've declared it. The console won't throw a error but return undefined.
*/ 

console.log(cat); // prints undefined
var cat = 'Teddy'; // declare the variable cat and initialize it.
console.log(cat); // prints 'Teddy' becuase it's been initialized.

//  DATATYPES!

// 1. Number
// can be decimicals, numbers and negative numbers.
let x = 5; 
console.log(x); // positive number example
let y = 0.5;
console.log(y); // decimical number exaple. can't start with .
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
/* Array is a complex data type wrapped in brackets [ ] that can store multiple data
 * in one variable. Array's are index based that you can find data
 * using brackets. The first index is 0.
 * they are mutable ie can use built in functions to add or remove from
 * an array
 * .push(value) adds to the end of an array
 * .pop() removes from the end of an array
 * .unshift(value) adds to the front of an array
 * .shift() removes from the front of an array
*/
const arr = []; // array literal
const arrStr = ['Hello', 'World', 'and', 'Jon']; // array of strings
console.log('arrStr: ' + arrStr[3]); // prints Jon
const arrNum = [1,2,3,4,5];
console.log(arrNum[1] + arrNum[3]); // prints 6 (2+4)
arrNum.push(6, 7, 8);
console.log(arrNum) // prints [1,2,3,4,5,6,7,8];
arrNum.pop() 
console.log(arrNum) // prints [1,2,3,4,5,6,7];
arrNum.unshift(0) 
console.log(arrNum) // prints [0,1,2,3,4,5,6,7];
arrNum.shift() 
console.log(arrNum) // prints [1,2,3,4,5,6,7];

// 5. Object
/* Object is also a complex data type wrapped in curley braces { } that has a key / value properties.
 * Objects do not have indexes. You can use dot notation or bracket notation
 * to get values from the object
*/

const obj = {} // obejct literal
const meals = {
    breakfast: 'eggs',
    lunch: ['sandwitch', 'chips', 'water'],
    dinner: false
}

meals.snack = 'almonds';

console.log(meals);
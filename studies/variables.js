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

// let and const are preferable to use because the can be blocked scoped unlike var 
// let also allows you to re-assign the variable const can't re-assign.

let lastName = 'Klumpp';
console.log(`lastName: ${lastName}`); // prints Klumpp
// re-assigning let
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
size(12) // prints 200 but doesn't throw an error because it can't reference the other let num.

// const can not be re-assigned

const dog = 'Solomon';
console.log(dog); // prints Solomon
/* 
dog = 'Barko'; // throws an error because dog has already be assigned to 'Solomon'.
*/

// 3. HOSTING
/* hosting happens if you reference a variable before 
 * you've declared it. The console won't throw a error but return undefined.
*/ 

console.log(cat); // prints undefined
var cat = 'Teddy'; // declare the variable cat and initialize it.
console.log(cat); // prints 'Teddy' because it's been initialized.

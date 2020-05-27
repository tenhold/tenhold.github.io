// 1. Assignment Operators
/*  = assign the value of the right to the left
 * += add the value of the right to the left
 * -= subtract
 * *= multiply
 * /= divide
*/

const name = 'Jon'; // assigning the string of 'Jon' to the variable name.
let num1 = 5;
num1 += 5;
console.log('num1: ' + num1); // prints 10;
num1 -= 2;
console.log('num1: ' + num1); // prints 8;
num1 *= 5;
console.log('num1: ' + num1); // prints 40;
num1 /= 5;
console.log('num1: ' + num1); // prints 5;

// 2. Arithmetic Operators
/* + addition
 * - subtraction
 * * multiplication
 * / division
 * % remainder
*/

let x = 2;
let y = 10;

const add = x + y;
const sub = x - y;
const multi = x * y;

// 3. Comparison Operators
// used when comparing values or variables, returns a boolean value.
/* === strict equality
 * == equal 
 * !== not strict equality
 * > greater than
 * >= greater than or equal to
 * < less than
 * <= less than or equal to
*/

// The example below showcases how to use strictly equal to, greater than,
// and less then. It also shows how to 
const test = [100, 90, 100, 85, 78, 80, 50, 99];

function gradeTest(array) {
    const grade = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === 100) {
            grade.push('green');
        } else if (array[i] >= 80 && array[i] <= 99) {
            grade.push('yellow');
        } else if (array[i] >= 0 && array[i] <= 79) {
            grade.push('red');
        }
    }
    return grade;
}
console.log(test);
console.log(gradeTest(test));

// 4. Logical Operators
/* ! not (false, reverses the condition)
 * && and (both conditions have to be true)
 * || or (either condition can be true)
*/

const weather = 'sunny';
const high = 90;

if (weather !== 'rainy' || high > 70) {
    console.log('It is a nice day!');
} else if (weather === 'sunny' && high < 85) {
    console.log('It is going to be a hot one!');
}

// 5. Unary Operators
/* Takes an argument and performs an operation. They are more efficient that 
 * function calls
 * + Tries to convert the operand into a number
 * - Tries to convert the operand into a number and makes it negative
 * ! Not converts it to a boolean value and makes it false
 * ++ Increment adds one to the number
 * -- Decrement subtracts one from the number
 * typeof Returns a string of what the operand is.
 * delete Deletes either a array index or the property of an object
*/

let num2 = 10;
let num2Neg = -num2;
console.log(`num2: ${num2}
num2Neg: ${num2Neg}`); // example of unary -. prints -10.

if (!'hello') {
    console.log("can't find me!");
    
} else {
    console.log("How did you get here?");
}

// prints "How did you get here?" because the first if is trying to 
// evaluate as true but the ! is making it a false boolean value.

let addOne = 10
addOne++;
console.log(addOne); // prints 11
let subOne = 20;
subOne--;
console.log(subOne); // prints 19;

/** Ternary Operator
 * short hand for an if statement
 * syntax (\boolean value\ ? \true condition\ : \false condition)
 * condition followed by (?) execution if truthy followed by colon (:)
 * execution if falsy
*/

const haveBeer = doneStuding => doneStuding ? 'Have one' : 'Finish your work';

console.log(haveBeer(true)); // prints 'Have one'


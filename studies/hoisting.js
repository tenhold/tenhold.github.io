/**
 *                                              HOSITING
 * 
 * Hositing is the concept that if a variable or a function is declared the are brought 
 * to the top of the code at call time. This allows the devs to be able to use either a function
 * or a variable at any time with in the code. 
 * 
 * Variables:   Only hosist the declaration not the value
 * var:         can be called before it's assigned a value. If called it will return
 *              undefined.
 * let / cont:  both are hoisted but can't be called before assigment. Will throw
 *              a reference error.
 * 
 * Functions:   Hoist both the declaration and the assigned value if assigned with 
 *              a function declaration. If assigned with a function expression only
 *              the declaration is hoisted the code block is not. This functions
 *              similar to a variable. We will see examples below.
 * 
 * Temporal Dead Zone:  the engine actually goes through the code twice. onece  at
 *                      the creation phase, it'll take all the variables and functions
 *                      and store them in memory if it was declared with var it'll assign
 *                      it undefined but if if it was declared with let / const then it'll
 *                      still hoist it but have a speical mode temporal dead zone where
 *                      they exist but you don't have access to them until declared.
 * 
 * JS Interpreter:  or engine. Basically a way for javascript to be convereted to 
 *                  machine understand that then is able to operate on the machine.
*/




// var hoisting example
console.log(anyoneThere); // prints undefined

var anyoneThere = 'nope';

// let / const hoisting

// console.log(seeMe); // will give a reference error. it is still hoisted
                       // but not accessable until after declaration


let seeMe = false;
const hardHeaded = true;

console.log(seeMe); // prints false

// function declaration example

add(3, 5); // still returns 8 because the whole function and block is all hoisted 

function add(num1, num2) {
    console.log(num1 + num2);
}

// function expression example

// add3(3, 3, 2); // would return a reference error: can't access before
// initialization similar to the way a variable is hoisted

// a variable that is assigned an anonymous function
const add3 = function(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

add3(3, 3, 2); // will print 8 
/** Functions are reusable blocks of code that accepts
 * inputs and returns a new data type.
 * There are 4 parts to a function
 * 1. Name 2. Parameter(s) 3. function body 4. return statement.
 * Functions need a return statement to access the 
 * code that ran inside the function.
 * return statements are only used in a function.
 * Function parameters are used at the initialization phase. 
 * Arguments are used when we call the function and take the place of the 
 * parameters
 * Any time you are declaring a function you supply it was parameters. Which are
 * placeholders that are used to let us know when we are actually declaring the
 * function what the supplied arguments should be. 
 * Arguments are used when we have actual data that we need to run through the
 * function.
*/

function print() {
    console.log('Hello World');
} // function syntax that prints 'Hello World' to the console.
// this function doesn't have any parameters and the name of the function is print

print(); // function call, or executing it, to print 'Hello World'

/* IOCE
* I: inputs (what's being passed into the function)
* O: outputs (what should the function return);
* C: constraints (any instructions on how the function was built)
* E: edge case (what conditions do I have to meet to get the correct output)    
*/

// I: two numbers
// O: the sum of the numbers
// C: N/A
// E: can be strings but won't get the desired output.

// this is a function declaration 
function add(x, y) { // this declaration takes 2 parameters 
    return x += y;   // parameters are used a reference points for our args later
}
const four = add(2,2); // assigning a function to a variable and adding two arguments 
console.log(four);     // both the number two 

const multi = (x,y) => x *= y; // shortened function using arrow function and removing
// the return because it's on the same line.

console.log(multi(4,4));

console.log(typeof multi); // returns that multi is a function


// functions can modify global variables. Scope example below

const camera = {
    model: 'x100v',
    brand: 'fuji film',
    sensorSize: 'APSC',
    owners: []
};

const newCam = {}; 

console.log(camera); // prints the camera object before we add to it with function

function cameraOwners(obj, name) { // function that takes two parameters 
    if (obj.owners === true) { // if owners exists in the object then
    obj.owners.push(name); // pushes the name into an array in the object
    } else { // if owners does not exist
        obj.owners = []; // create an empty array
        obj.owners.push(name); // push the name into the array
    }
};

cameraOwners(camera, 'Jon'); // function call

console.log(camera); // prints the object with the added values from the function


/** Closures
 * gives you access to outer function scope form an inner function.
*/

// example of a closure the add function takes a single argument and returns
// another function. That function then takes one argument and adds the other argument
// together.

function add(x) {
    return function(y) { // returns the anonymous function when called
        return x + y; // runs the inner function that adds the first number called
    };
}

const add5 = add(5); // assign a function to the variable add5
const add20 = add(20); // assign a function to the variable add20;
console.log(add5(5), add20(5)); // calling the function and adding a new argument
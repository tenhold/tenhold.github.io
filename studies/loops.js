/** While loop
 * creates a loop that runs as long as the condition is true.
 * Good to use when you don't know when the loop is going to stop.
 * While loops has a stopping condition.
 * Without a stopping condition the loop would never end!
*/

let payday = 0;

while (payday <= 20) { // loops until the stopping condition, 20, is met
    console.log('$', payday); // prints $ and the current amount to the console
    payday += 2; // adds 2 to payday each time the loop runs.
};

/** For loop
 * Similar to while loop a for loop needs a stopping condition or it'll run
 * forever. For loops have three conditions (start; stop; update)
 * on the start you initialize a variable. Stop you tell where you want the 
 * loop to end. Update allows you to move through the loop and eventually hit the 
 * stopping condition.
*/

// for loop counting down
const countdown = () => { // a function with no parameters
    for (let i = 10; i > 0; i--) { // the function creates a for loop reverse
        console.log(i); // every time the loop runs we log the variable that was set to 10
    }
    console.log('HAPPY NEW YEAR!'); // prints 'Happy new year' after the loop finishes
}
 
countdown(); // calling the function to run the loop

// for loop counting up
const countup = () => { //  a function with no parameters
    for (let i = 0; i <= 10; i++) { // loop that counts up from 0 to 10 by one
        console.log(i); // prints the number each time
    }
};

countup(); // call the function

// for loop through an array.
const lunchBox = ['turkey sandwich', 'chips', 'milk', 'cookie'];
// looping through an array. The loop will stop that the end of the array
for (let i = 0; i < lunchBox.length; i++) { 
    console.log(`I have ${lunchBox[i]}`); // prints 'I have lunchBox item'
};

const eatLunch = array => { // declare a function called eatLunch that takes an array
    let lunchAte = []; // an array literal 
    for (let i = array.length - 1; i >= 0; i--) { // reverse loop through the array
        lunchAte.push(array[i]); // push the looping array values into the array literal created
    }
    console.log(lunchAte); // prints the reversed array to the console.
}

eatLunch(lunchBox);

/** for in loops
 * Doesn't have a stopping condition. Can only use a for in loop on an object
 * becuase they don't have any indexes. 
 * You can also use a for in loop on an array.
 * syntax for (let key in object) { run some code here }
*/

const zion = {
    name: 'Zion',
    age: 19,
    number: 1,
    team: 'Pelicans',
    college: 'Duke'
};

for (let key in zion) {
    console.log(key, zion[key]);
};

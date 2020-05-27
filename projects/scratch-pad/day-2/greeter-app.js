// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */
// create a function that takes a time and prints a greeting depending on the time of day
// input: a time between 0 and 24
// output: NA prints a string greeting to the console.
function greeter(hour) {
    // YOUR CODE BELOW HERE //
    if (hour >= 0 && hour <= 11) { // hour is between 0 and 11
        console.log('Good Morning!');
    } else if (hour >= 12 && hour <= 16) { // hour is between 12 and 16
        console.log('Good Afternoon!'); // prints 'Good Afternoon'
    } else if (hour >= 17 && hour <= 21) { // hour is between 17 and 21
        console.log('Good Evening!'); // prints 'Good Evening!'
    } else if (hour >= 22 && hour <= 24) { // hour is between 22 and 24
        console.log('Good Night!');  // prints 'Good Night!'
    } else { // defalut if nothing is corret
        console.log('Please use a time between 0 and 24'); // tells user to add the correct time
    }
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}
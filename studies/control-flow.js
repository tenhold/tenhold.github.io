/** if , else if , else
 * if statements execute a condition in a code block if it is truthy. If the condition 
 * is falsy than another statement will execute. 
 * The else if directly follows and if statement and only runs if the condition for 
 * the if statement isn't met. else if isn't required to have a functional if statement
 * Else statement can either follow the if or else if statement. Else is a 'default' statement
 * and will only run if all other conditions are not met. Else doesn't contain a condition.
 * You can have as many else if statements but only one if and else.
 * flow would be... 
 * if (condition) { code to run } /if false then/ else if (another condition) { code }
 * /if false then/ else { code to run };
 * 
 * The first statement that resolves to true will be the line that is executed. If there was 
 * another else if statement later in the chain then that would never be found because the chain 
 * had already reached the first true and executed.
*/

const hungry = true;

if (!hungry) { // condition would be false hungry === false
    console.log('Not hungry yet'); // print "Not hungry yet"
} else if (hungry) { // hungry === true
    console.log('Time for Dinner!!!!'); // prints 'Time for Dinner!!!'
} else { // if no statement was true then this code would run
    console.log('You can\'t be hungry and not hungry at the same time');
}
 /** Switch statement
  * similar to if / else if statement it evaluates an expression and matches it to 
  * a case and runs the code.
  * Must have a break or the code will keep running until it finds a break.
  * 
  * A switch statement is good for when you have one piece of data that you want to replace.
  * If you want to do any sort of complicated logic then a if / else statement would be a better
  * use case
 */
 
 const glass = 'half full';
 
 switch (glass) {
    case 'half empty': // 'half full' does not equal 'half empty'
        console.log('I am a left-brained person'); // code will not run
        break; // does not see the break because the code didn't run.
    case 'half full': // 'half full' === 'half full' 
        console.log('I am a right-brained person'); // prints this
        break; // breaks out of the loop 
    default: // if none of the above code was true then this would run
        console.log('Do you spill the milk?');
 }


/** 
 *                          SCOPES
 * 
 * Scope is ability for a variable or an expression to be accessible or inaccessible
 * depending on where it has been declared. There are different 'levels' of scope.
 * The first and main scope is GLOBAL. 
 * 
 * GLOBAL SCOPE: Anything declared in the global scope is accessible
 *      anywhere in the code.
 * LOCAL SCOPE:  Variables declared in the function block. These variables are only 
 *      available within the local scope and aren't accessible outside of the scope.
 *      One key about this is if you have another function within the local scope that
 *      internal function still has access to that variable. The global scope on the 
 *      other hand does not have access to this variable. 
 * BLOCK SCOPE: Anything wrapped in {} curly braces. If / else and loops are considered
 *      block scope. Not all variable keywords are able to be block scoped. 
 *      Block scoping is something that was introduced in ES6 with the two keywords, 
 *      LET & CONST. Block scope follows the same rules as local scope.
 * 
 *                      VAR, LET, CONST
 * VAR: is only available for global and local scoped. if you defined a variable using 
 *      the keyword var in either a loop or if/else statement that isn't within a 
 *      function, then it will be available within the global scope and accessible 
 *      elsewhere in the code. This could cause unwanted conflicts if not paid attention
 *      to. 
 * LET & CONST: Both are blocked scoped. If you declare a variable using the keyword
 *      let i in a loop try to reassign it or print it to the console then you'll 
 *      receive a reference error.
 */
 
 
 //     examples of global / local scope using var as the keyword
 
 
 //     examples of global / local scope using var as the keyword
 

 //                           global scope example
 var saying = 'Do or Do not. ';
 
 function yoda() {
     saying += 'there is no try.'; // even though the variable saying is declared
                                   // outside of the function it's still available.
 }
 
 console.log(saying); // prints 'Do or Do not. ' because isAccessible hasn't been called.

yoda(); // we've now called the function. it will concatenate saying adding to the string
console.log(saying); // prints 'Do or Do not. There is no try.'

//                            local scope example

function hello() {
  var statement = 'CAN YOU HEAR ME?';
  console.log(statement); // will print 'CAN YOU HEAR ME?' if hello() is called
}

hello(); // calling hello to print the statement.
// console.log(statement); // would throw a reference error because the 
                           // variable was declared in the local scope
                           // of the function.

var myHeath = 100;

function dragon() {
  var powerLevel = 100; // local scoped variable
  console.log('a dragon appears');
  //console.log(diceRoll); // would throw a reference error this block does not have access 
                           // to the block below.
  return {
    attack() {
      console.log('You are attacked do you want to fight or run?');
    },
    iAttack(boolean) {
      if (boolean === true) {
        powerLevel -= 20;
        var diceRoll = Math.floor(Math.random() * 2);
        if (diceRoll === 1) {
          console.log(`dragon health is ${powerLevel}`); // the function still has access to
                                                         // the variable declared with in the
                                                         // local scope because it is within
                                                         // it also
          console.log(`Your health is ${myHeath -= 50}`); // myHeath is accessible because it is
                                                          // in the global scope.
        } else {
          console.log(`dragon health is ${powerLevel}`);
          console.log(`Your health is ${myHeath}`);
        }
      } else {
        console.log('You ran away like a coward');
      }
    }
  };
}

var woods = dragon(); // calling the dragon function and assigning to the variable woods.
woods.attack(); // calling the inner function.
woods.iAttack(true);
woods.iAttack(true);
woods.iAttack(false);
// console.log(powerLevel); // would throw an reference error because the global scope does not
                           // have access to it.
// console.log(diceRoll); // would also throw a reference error


                    // let / const example

for (let i = 0; i <= 10; i++) {
  console.log('block', i);
}

// console.log(i) // would throw an error as i is scoped within the loop block
// but if you used var for example

for (var i = 11; i <= 20; i++) {
  console.log('block', i);
}

console.log('global', i) // prints 21. var isn't within the block of the for loop is i is now a 
                         // global variable
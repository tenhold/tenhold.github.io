
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// log a pound times the current number to the console in a loop the number should be 7.
/** 
 * I: a number
 * O: n/a were printing to the console
 */
function triangles(num) {
  // using a for loop set i to #. if the length of i is less than or equal to the num then we will stop. everytime we will add a # to the string 
  for (let i = '#'; i.length <= num; i += '#') {
  console.log(i);
  }
};

// triangles(7)

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * takes two parameters a start number and an end number
 * prints 'fizz' on 3 and 'buzz' on 5
 * I: start num , end num
 * O: each number but on divions of 3 'fizz' and 5 'buzz'
 */
 
function fizzBuzz(startNum, endNum) {
 // use a for loop to starting at startNum and ending at endNum
  for (let i = 1; i <= 15; i++) {
    // print fizzbuzz everytime a number can be divided by 3 and 5.
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      // print fizz if the number can be divied by 3
    } else if (i % 3 === 0) {
      console.log('fizz');
      // print buzz if the number can be divied by 5
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i);
    } 
  }
}

// fizzBuzz(1, 15);
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * print a chestboard depending on the input number
 * I: 1 parameter a number
 * O: a checkerboard of a # that is the number squared with the # everyother character
 */
 
function drawChessboard(num) {
  // declare an empty string this is what our checkerboard will become
  let line = '';
  // use a for loop to create 'rows'
  for (let i = 0; i < num; i++) {
    // use a nested for loop to print our rows
    for (let j = 0; j < num; j++) {
      // every other space we will either print a space or a hash
      if ((i + j) % 2 === 0) {
        line += ' ';
      } else {
        line += '#';
      }
    }
    // after the row has printed then move to the next row.
    line += '\n';
  }
  // print the checkerboard to the console.
   console.log(line);
}



console.log(drawChessboard(8));



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}


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

triangles(7)

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

fizzBuzz(1, 15);
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * print a chestboard depending on the input number
 * I: 1 parameter a number
 * O: a checkerboard of a # that is the number squared with the # everyother character
 */
 
// function drawChessboard(num) {
//   // create a loop
// let line = '';
//   for (let i = 0; i <= num; i++) {
//     for (let j = 0; j <= num; j++) {
//       if ((i + j) % 2 === 0) {
//         line += ' ';
//       } else {
//         line += '#';
//       }
//     }
//     line += '\n';
//   }
//   return line;
// }


function drawChessboard(num) {
  // declare a variable to an empty string
  let line = '';
  // use a for loop to start at 0 and end at num for each line
  for (let i = 0; i < num; i++) {
    // use another for loop for each character in the line. each time j is equal to the number in the first loop this will allow us to 
    // have each starting number in the line either odd or even. j is less than number plus i. this will allow us to always have the 
    // same number of characters in each line
    for(let j = i; j < (num + i); j++) {
      // if the number is even then we will add the # to the line
      if (j % 2 === 0) {
        line += '#';
       // if odd then add a space to the line.
      } else {
        line += ' ';
      }
    }
    // after each line we will break it and create a new line.
    line += '\n';
  }
  // log the line to the console.
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

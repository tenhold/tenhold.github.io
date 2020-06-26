// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: an array that contains sub arrays
 * O: the sub arrays flattened into one array
 * E: 
 * C:
 * 
 */
function flatten(array) {
  // use reduce to flatten the array into one array.
  return array.reduce((flatArr, curIndex) => {
    // for each iteration take the array and join it with the current index
    return flatArr.concat(curIndex);
    
  })
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: value, test function, update function, body function
 * O: the array with the function applied
 * 
 * Each iteration, it first runs the test function on the current loop value and 
 * stops if that returns false. Then it calls the body function, giving it the 
 * current value. Finally, it calls the update function to create a new value and
 * starts from the beginning.
 * 
 */
 
// function unless(test, then) {
//   if (!test) then();
// }

// repeat(6, n => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even");
//   });
// });

function loop(value, testFunc, updateFunc, bodyFunc) {
  // call the test function on the value
  testFunc(value);
  // base case
  // if the test function returns false then return the value
  if (!testFunc(value)) {
    return value;
  }
  // call the test function on the value
  testFunc(value);
  // call the body function on the value
  bodyFunc(value);
  // recursive case
  // we went to return the updated value from the updateFunc call, the testFunc, updateFunc, and bodyFunc
  return loop(updateFunc(value), testFunc, updateFunc, bodyFunc)
  
}





// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * should determine if every value passes a test
 * I: array, function
 * O: boolean value
 */
 
function every(array, func) {
  // declare a variable to store a boolean value and set it to true
  let test = true;
  // use for each to loop over the array applying the function to each element
  array.forEach(element => {
  // if the test fails then change test to false and break the loop
    if(!func(element)) {
      test = false;
      return;
    }
  });
  // return the test boolean value
  return test;
}

// function every(array, func) {
//   return array.every(element => {
//     return func(element);
//   })
// }




// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: string
 * O: string either 'ltr' 'rtl' 'ttb'
 */
 
 function characterScript(code) {
   for(let key of SCRIPTS) {
     if (key.ranges.some(([from, to]) => {
       return code >= from && code < to;
     })) {
     return key;
    }
   } 
  return null;
 }
 
// console.log(SCRIPTS[0].direction);
// console.log('charCode', 'مس'.charCodeAt(0));

/**
 * split the text into an array at each space, find the characters code assocated with the word
 * loop over the array and count each character's writing direction
 * when we have a tally of each writing direction then we want to find the highest count and return
 * return the direction
 */

function dominantDirection(text) {
  // split the text into an array
  const textArr = text.split(' ');
  // loop over the array and find the character code that matches the first index of the word
  const textCodeArr = textArr.map(word =>  word.charCodeAt(0))
  // loop over the character codes
  const scriptFind = textCodeArr.map(code => {
    // each loop compare the code to the array of scripts
    for (let key of SCRIPTS) {
      // if the code is found in the range then we will return the direction of the writing
      if (key.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return key.direction;
      }
    }
    return null;
  })
  // useing reduce to count each writing direction adding it to an object
  .reduce((count, code) => {
    if (!count[code]) {
      // if the direction isn't in the object then add it and set the count to one
      count[code] = 1;
    } else  {
      // if the direction is found then add one to the count
      count[code]++;
    }
    return count;
  }, {});
  // create an array to store the directions and count
  const scriptFindArr = [];
  // loop over the object and push a sub array of directions and count into the array literal
  for (let key in scriptFind) {
    scriptFindArr.push([key, scriptFind[key]]);
  }
  // using sort to get the top script direction to the first element
  scriptFindArr.sort(function(a, b) {
    return b[1] - a[1];
  })
  // return only the first element in the first sub array witch will be the direction
  return scriptFindArr[0][0];
}

console.log(dominantDirection('يسي','fdッs', 'hello', 'hi', 'what', 'up'))

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};

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
function loop(value, testFunc, updateFunc, bodyFunc) {
  let newValue;
  for (let i = 1; i <= value; i++) {
    if (!testFunc(i)) {
    
    }
   bodyFunc(i)
   newValue = updateFunc(i);
  }
  return newValue;
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

function dominantDirection() {

}

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

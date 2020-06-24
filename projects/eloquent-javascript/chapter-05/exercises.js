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
  const textArr = text.split(' ');
  const textCodeArr = textArr.map(word =>  word.charCodeAt(0))
  return textCodeArr.map(code => {
    for (let key of SCRIPTS) {
      if (key.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return key.direction;
      }
    }
    return null;
  }).reduce((count, curCode) => {
    if (curCode !== count) {
      return curCode;
    }
    return count;
  });
  
  
  
  
  
  // .reduce((count, code) => {
  //   if (!count[code]) {
  //     count[code] = 1;
  //   } else  {
  //     count[code]++;
  //   }
  //   return count;
  // }, [])
  
  
  // let scriptArr = [];
  // for (let key in scriptFind) {
  //   scriptArr.push(scriptFind);
  // }
  
  // console.log('code test', scriptFind);
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

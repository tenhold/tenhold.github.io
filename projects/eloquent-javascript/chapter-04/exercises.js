////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// I: 3 params first start, second end and 3 is the steps
// O: an array of the numbers inbetween using the 3rd param as the step
// E: if 3rd parm is negative then step down.




// function range(start, end, step) {
//   // base case:
//   // when the start number is equal the the end number
//   if (start > end || step < 0) {
//     return [];
//   }
  
//   // resursive case
//   // keep the array of numbers and increae the start num by the step each time if step is undefined then increase by one
//   if (step === undefined) {
//     return [start].concat(range(start + 1, end));
//   }
  
//   return [start].concat(range(start + step, end, step))
// }

// console.log('range', range(1, 5, 2));


function range(start, end, step) {
  // declare an array to store the values from the params
  let rangeArr = [];
  // if the start and end are the same then return an array literal
  if (start === end) {
    return [];
    // if step is undefined then add one each loop
  } else if (step === undefined) {
    for (let i = start; i <= end; i++) {
      rangeArr.push(i);
    }
    // if step is positive then loop foward with the iteration of the step value
  } else if (step > 0) {
    for (let i = start; i <= end; i += step) {
      rangeArr.push(i);
    }
    // if step is less than zero return an array literal
  } else if (step < 0) {
      return rangeArr;
  }
  return rangeArr;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: array of numbers
 * O: a number of all the numbers in the array added together
 * E: if it's an array literal return 0, 
 *    should also work with negative numbers
 */
 
 
 
 function sum(array) {
   // base case
   // when the array length is 0
   if (array.length === 0) {
     return 0;
   }
   
   // recursion case
   // if the array is empty return 0
   
   return array[0] + sum(array.slice(1));
 }
 
 
 

// function sum(array) {
// // declare a var to store the totals of the numbers
//   let sum = 0; 
//   // find out if the array has any values
//   if (array.length === 0) {
//     return 0;
//   } else {
//   // use a for loop to loop and add each value in the array
//     for (let i = 0; i < array.length; i++) {
//       // add the element to the sum each time it loops
//       sum += array[i];
//     }
//   }
//   return sum;
// }

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * reverse an array without changing the origional array
 * I: array
 * O: a new array of the input array reversed
 * E: if an array literal return array literal
 */
 
 
 function reverseArray(array) {
   // base case 
   // when the array.length is 0.
   if (!array.length) {
     return [];
   }
   
   // rescurstive case 
   // unshift the array index in the new array.
   return reverseArray(array.slice(1)).concat([array[0]]);
 }
 
 console.log(reverseArray([1,2,3]))
 
 
 
 
 
 
 
 
 
 
 

// function reverseArray(array) {
//   // decalare an array literal
//   let revArray = [];
//   // check to see if the array is empty
//   if (array.length === 0) {
//     return revArray;
//   } else {
//   // use a for loop starting at the end of the array and pushing the value into the new array.
//     for (let i = array.length - 1; i >= 0; i--) {
//       // each time push the element into the new array.
//       revArray.push(array[i]);
//     }
//   }
//   return revArray;
// }

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Should reverse the array and not create a new array of the array reverested
 * I: array
 * O: same array reversed;
// */


function reverseArrayInPlace(array) {
  // use for loop to reverse the array
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  for (let i = 0; i < array.length - 1 / 2; i++) {
    array.shift();
  }
  return array;
}

console.log(reverseArrayInPlace([1,2,3,4]))









// function reverseArrayInPlace(array) {
//   // decare a rev array that is referencing the array argument
//   // create a for loop set a var to be the start and a var to be the last position, looping condition is keep looping until i is equal to j
//   // i will go up one and j will go done one
//   for (let i = 0, j = array.length - 1; i < j; i++, j--) {
//     // create a variable to store the i element and set it to the element in the i position
//     let temp = array[i];
//     // set the element in the i position to the j element
//     array[i] = array[j];
//     // now put the j element into the temp storage which was the i position
//     array[j] = temp;
//   }
//   // return the array
//   return array;
// }
// let nums = [1,2,3,4,5];


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * converts array into a list using !RECURSION!
 * I: array
 * O: object with the value as the key and the array element as the value, a second key/value is the rest 
 * of the array until there is no more elements
 * 
 * ex:
 * 
 * ['a', 'b', 'c']
 * 
 * {
 *  value: 'a',
 *   rest: {
 *        value: 'b',
 *        rest: {
 *          value: 'c',
 *          rest: null
 *        }
 *    }
 * }
 *
 * 
 * 
 */


// function arrayToList(array) {
//   let tree = {};
//   // base case
//   // when the array.length is 0
//   if (!array.length) {
//     return tree;
//   }
  
//   // recursive case
//   // assign the key with the first index of the array and the second key of rest to the rest of the array 
//   tree.value = array[0];
//   tree.rest = arrayToList(array.slice(1));
//   if (array.length === 1) {
//     tree.rest = null;
//   }
//   return tree;
// }



let arr = ['a', 'b', 'c'];
console.log(arrayToList(arr));



function arrayToList(array, tree = {}) {
  // base case: 
  // array.length is 0
  if (array.length === 0) {
    // on the last loop the rest value will be null
    return null;
  }
  // recursion case
  // take a 'key' as value: each element in the array as the value every call add rest and another ojbect with the rest of the elements
  // the value is the first index in the array
  tree.value = array[0];
  // the rest value is the function with the first index sliced off
  tree.rest = arrayToList(array.slice(1));
  // return truee
  return tree;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Reversing what we just did
 *   {
 *    value: 3,
 *      rest: {
 *        value: 2,
 *          rest: {
 *            value: 1,
 *              rest: null
 *          }
 *        }
 *      }
 * 
 * into
 * [3,2,1]
 * 
 * I: object with a key called value: of an simple datatype, a value called rest: of an Object without the first element
 * O: array of the value keys!
 */
 


// function listToArray(object) {
//   // base case: when rest = null
//   if (object.rest === null) {
//     return [object.value];
//   }
//   // reusrsive case
//   // to push the value in the array and reassign move to the next object
//   return [object.value].concat(listToArray(Object.assign(object, object.rest)));
// }


let tree =   {
    value: 3,
      rest: {
        value: 2,
          rest: {
            value: 1,
               rest: null
          }
        }
      }

console.log(listToArray(tree));






function listToArray(object) {
  // base case:
  // when the rest value is null
  if (object.rest === null) {
    return [object.value];
  }
  
  // recursion case:
  // push the first object key into the array and return the object without the first key use delete?
  return [object.value].concat(listToArray(object.rest));
}

 let objTree = {
  value: 3,
    rest: {
    value: 2,
      rest: {
        value: 1,
          rest: null
      }
   }
  };
  
  console.log(listToArray(objTree));



////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * adds an element to the start of an array;
 * I: value, array
 * O: an array with the value a the front
 * 
 *  ex (1, [2,3] ====>>>>>   [1,2,3])
 *  ex (1, 
 * { 
 *   value: 2,
 *    rest: {
        value: 3,
        rest: null
      }    
    })
  ====== equals =====          
    {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    }
 */




function prepend(value, collection) {
  // base case
  // if array length is 0 or rest is null
  if (Array.isArray(collection)) {
    collection.unshift(value);
  } else {
    let newObj = {value: value, rest: collection};
    return newObj;
  }
}








// function prepend(value, collection) {
//   // put the value at the first index in the array and move all other indexes by one;
//   // create a new array with the first index at null push the array values into the new array starting at the 1st index
//   if (Array.isArray(collection)) {
//     let newArr = [null];
//     for (let i = 0; i < collection.length; i++) {
//       newArr.push(collection[i]);
//     }
//     // reassign the first index to the value argument
//     newArr[0] = value;
//     // return the new array
//     return newArr;
//   // if the collection is an object
//   } else {
//     // create a new object with the value of arguemnt value and rest as the collection return new object
//     let newObj = {value: value, rest: collection};
//     return newObj;
//   }
// }

// let numArr = [3,4,5];
// console.log('prepend', prepend(1, numArr))

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: array and a value
 * O: the index that that value is in.
 * E: if value isn't in the array return undefined 
 */
 
  
  
  
  
  
  
  
function nth(collection, value) {
  // base case;
  // if the value collection length is 0 then return undefined
  if (!collection) {
    return undefined;
    // if the value is 0 return the value of the collection
  } else if (value === 0) {
    return collection.value;
  }
  // recursive case
  // count down the value for each iteration
  return nth(collection.rest, value - 1);
}
 
 
console.log(nth([1,2,3], 2)); 

 let objTree2 = {
  value: 3,
    rest: {
    value: 2,
      rest: {
        value: 1,
          rest: null
      }
   }
  };
 
 
// function nth(collection, value) {
//   // base case:
//   // if array.length is 0 then return undefined 
//   if (collection.length - 1 === value) {
//     return collection[0];
//   } else if (value === 0) {
//     return undefined;
//   } else if (collection[value] === value) {
//     return collection[value];
//   }
  
//   // recursive case
//   if (Array.isArray(collection)) {
//     return nth(collection, value - 1);
//   } else {
//     return nth(collection.rest);
//   }
// }


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: two values
 * O: a boolean value
*/

// function deepEqual(val1, val2) {
//   // base case when rest is null
//   if (val1 === null && val2 === null) {
//     return true;
//   // check to see if both values are an array
//   } else if (Array.isArray(val1) && Array.isArray(val2)) {
//     return val1.every(value => {
//       return val2.includes(value);
//     })
//   // check to see if the values are both the same
//   } else if (val1 === val2) {
//     return true;
//   // check to see if they are both 'objects'
//   } else if (typeof val1 === 'object' && typeof val2 === 'object') {
//     const val1Keys = Object.keys(val1);
//     const val2Keys = Object.keys(val2);
//     const keyCheck = val1Keys.every(function(value) {
//       return val2Keys.includes(value);
//     })
//     console.log(keyCheck);
//   }
//   return false;
// };


// function deepEqual(val1, val2) {
//   // base case when rest is null
//   if (val1 === null && val2 === null) {
//     return true;
//   // check to see if both values are an array
//   } else if (Array.isArray(val1) && Array.isArray(val2)) {
//     return val1.every(value => {
//       return val2.includes(value);
//     })
//   // check to see if the values are both the same
//   } else if (val1 === val2) {
//     return true;
//   // check to see if they are both 'objects'
//   } else if (typeof val1 === 'object' && typeof val2 === 'object') {
//     const val1List = listToArray(val1);
//     const val2List = listToArray(val2);
//     return val1List.every(value => {
//       return val2List.includes(value);
//     })
//   }
//   return false;
// };

// console.log(deepEqual)

// function deepEqual(val1, val2) {
//   // check to see if either value is null and if both are return true
//   if (val1 === null && val2 === null) {
//     return true;
//   // check to see if both values are an array
//   } else if (Array.isArray(val1) && Array.isArray(val2)) {
//     val1.every(value => val2.includes(value));
//   // check to see if the values are both the same
//   } else if (val1 === val2) {
//     return true;
//   // check to see if they are both 'objects'
//   } else if (typeof val1 === 'object' && typeof val2 === 'object') {
//     // create a variable to store all the keys of the object in an array
//     let val1Keys = Object.keys(val1);
//     // create a variable to store all the keys of the object in an array
//     let val2Keys = Object.keys(val2);
//     // create a variable to store all the values of the obects in an array
//     let val1Vals = Object.values(val1);
//     // create a variable to store all the values of the obects in an array
//     let val2Vals = Object.values(val2);
//     // compair all the values of the keys
//     const compairKeys = val1Keys.every(function(key) {
//       return val2Keys.includes(key);
//     });
//     // compair all the values of the values
//     const compairVals = val1Vals.every(function(val) {
//       if (typeof val === 'object') {
//         console.log(val);
//       }
//       return val2Vals.includes(val);
//     });
//     // if both the values and keys are the same return true;
//     if (compairKeys && compairVals) {
//       return true;
//     };
//   }
//   return false;
// };

function deepEqual(val1, val2) {
  // check to see if either value is null and if both are return true
  // check to see if the values are both the same
  if (val1 === null && val2 === null || val1 === val2) {
    return true;
  // check to see if both values are an array
  } else if (Array.isArray(val1) && Array.isArray(val2)) {
    for (let i = 0; i < val1.length; i++) {
      if (typeof val1[i] === typeof val2[i]) {
        return deepEqual(val1[i], val2[i]);
      }
      return false;
    }
  // check to see if they are both 'objects'
  } else if (typeof val1 === 'object' && typeof val2 === 'object' && val1 !== null && val2 !== null) {
    // create a variable to store all the keys of the object in an array
    let val1Keys = Object.keys(val1);
    // create a variable to store all the keys of the object in an array
    let val2Keys = Object.keys(val2);
    for (let i = 0; i < val1Keys.length; i++) {
      if (val1Keys[i] === val1Keys[i] && typeof val1[val1Keys[i]] === typeof val2[val2Keys[i]]) {
        return deepEqual(val1[val1Keys[i]], val2[val2Keys[i]]);
      } 
    }
    return false;
    }
  return false;
};




////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};

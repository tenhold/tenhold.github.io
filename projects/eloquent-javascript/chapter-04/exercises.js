////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// I: 3 params first start, second end and 3 is the steps
// O: an array of the numbers inbetween using the 3rd param as the step
// E: if 3rd parm is negative then step down.

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

console.log('range', range(2,2));

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
 // declare a var to store the totals of the numbers
  let sum = 0; 
  // find out if the array has any values
  if (array.length === 0) {
    return 0;
  } else {
  // use a for loop to loop and add each value in the array
    for (let i = 0; i < array.length; i++) {
      // add the element to the sum each time it loops
      sum += array[i];
    }
  }
  return sum;
}

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
  // decalare an array literal
  let revArray = [];
  // check to see if the array is empty
  if (array.length === 0) {
    return revArray;
  } else {
  // use a for loop starting at the end of the array and pushing the value into the new array.
    for (let i = array.length - 1; i >= 0; i--) {
      // each time push the element into the new array.
      revArray.push(array[i]);
    }
  }
  return revArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Should reverse the array and not create a new array of the array reverested
 * I: array
 * O: same array reversed;
 */
function reverseArrayInPlace(array) {
  // decare a rev array that is referencing the array argument
  // create a for loop set a var to be the start and a var to be the last position, looping condition is keep looping until i is equal to j
  // i will go up one and j will go done one
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    // create a variable to store the i element and set it to the element in the i position
    let temp = array[i];
    // set the element in the i position to the j element
    array[i] = array[j];
    // now put the j element into the temp storage which was the i position
    array[j] = temp;
  }
  // return the array
  return array;
}
let nums = [1,2,3,4,5];


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

let arr = ['a', 'b', 'c'];
console.log(arrayToList(arr));

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

function listToArray(object) {
  // create an array literal to store the values
  let array = [];
  // use a for loop where i is the object, it stops when it reaches null, and i moves to the next obeject at the rest position.
  for (let i = object; i; i = i.rest) {
    // each time push the i key of value into the array.
    array.push(i.value);
  }
  // return the array
  return array;
}

// function listToArray(object) {
//   // base case:
//   // when the rest value is null
//   if (object.rest === null) {
//     return [object.value];
//   }
  
//   // recursion case:
//   // push the first object key into the array and return the object without the first key use delete?
//   return [  object.value].concat(listToArray(object.rest));
// }

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
 */

function prepend(value, collection) {
  // put the value at the first index in the array and move all other indexes by one;
  // create a new array with the first index at null push the array values into the new array starting at the 1st index
  if (Array.isArray(collection)) {
    let newArr = [null];
    for (let i = 0; i < collection.length; i++) {
      newArr.push(collection[i]);
    }
    // reassign the first index to the value argument
    newArr[0] = value;
    // return the new array
    return newArr;
  // if the collection is an object
  } else {
    // create a new object with the value of arguemnt value and rest as the collection return new object
    let newObj = {value: value, rest: collection};
    return newObj;
  }
}

let numArr = [3,4,5];
console.log('prepend', prepend(1, numArr))

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

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

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}



/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // test for null
    if (value === null) {
        return 'null';
    // test for instance of date
    } else if (value instanceof Date === true) {
        return 'date';
    // test for array
    } else if (Array.isArray(value)) {
        return 'array';
    // if anything anything else return the type of value
    } else {
        return typeof value;
    }
}


// console.log(_.typeOf(1))


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // create an array to store data
    const returnArray = [];
    // if the array is an array or the number is greater than zero were going to return the empty array we created.
    if (!Array.isArray(array) || number < 0) {
        return returnArray;
    // if the number is not a number or number is not undefined
    } else if (isNaN(number) || number === undefined) {
    // we will return just the first array index as a string
        return array[0];
    }
    // if we give a parameter a number then we will now loop through the array 
    for (let i = 0; i < array.length; i++) {
        // if the number is 1 we will return the first index as a string
        if (number === 1) return array[0];
        // we will push the array into the return array.
        else {
            returnArray.push(array[i]);
        }
    } // we will now return the array and remove the amount of indexes from the number parameter 
    return returnArray.slice(0, number);
}

console.log(_.first(['hello',3,4]));

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// takes two parameters an array and a number if the array is not an array return []
// if there isn't a number given then return the last element in the array.
// I: array and a number
// O; the last index as a string or the last ones in an array depending on the number
// E: if number is negative or greater than the length of the array.

_.last = function(array, number) {
    // declare an empty array
    const newArray = [];
    // if array is an array or number is greater than 0 return the empty array.
    if (!Array.isArray(array) || number < 0) {
        return newArray;
    // if the number is not a number or is undefined return the last element in the array
    } else if (isNaN(number) || number === undefined) {
        return array[array.length - 1];
    // else return the array sliced the amount of number
    } else {
        return array.slice(-number)
    }
    
}   

// console.log(_.last([1,3,5], 'he'));

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

/**
 * I: 2 params: an array and a value,
 * O: return the index value of the first value, -1 of the value is not in the array
 * E: if array has multiple occurences only return the first occurance, if not in the array return -1 
 */

_.indexOf = function(array, val) {
    // loop through the array
    for (let i = 0; i < array.length; i++) {
        // if val is equal to a value in the array return the index number that data is located in.
        if (val === array[i]) {
            return i;
        }
    }
    // if val isn't in the array return -1
    return -1;
}
//  console.log(_.indexOf(["a","b","c"], "c")); // -> 2
//  console.log(_.indexOf(["a","b","c"], "d")) // -> -1


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/**
 * I: two params array and value
 * O: boolean value true if it exists flase if not
 * E: if no val is given return false
 */
 
 _.contains = function(array, val) {
     // loop through the array
     // if there is no val return false
     let result = false;
     for (let i = 0; i < array.length; i++) {
        // if val is equal to the array value change result to true;
        val === array[i] ? result = true : false; 
     }
     // return result
     return result;
 }

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

/**
 * I: 2 params a collection so either an array or object. and a function
 * O: if collection is an array call the function once for each element 
 */
 
 _.each = function(collection, func) {
     // check to see if the collection is an array
     if(_.typeOf(collection) === 'array') {
        // loop through the array calling the function on each element
        for (let i = 0; i < collection.length; i++) {
            // the function takes 3 parameters the element in the collection, the index and the entire collection.
            func(collection[i], i, collection);
        }
     }
     // see if the collection is an object
     if(_.typeOf(collection) === 'object') {
         // loop through the object
         for (let key in collection) {
             func(collection[key], key, collection);
         }
     }
 }
 
 
 
 _.each(["a","b","c"], function(e, i, a){ console.log(e)});
//*      -> should log "a" "b" "c" to the console
 
 
//  console.log(_.each([1,2,3,4], add()));

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/**
 * takes one param an array, returns a new array of all elements from the array with duplicates removed
 * Use .indexOf()
 */
 
_.unique = function(array) {
    // create a new array to push the values from the loop 
    let newArray = [];
    // loop through the array
    for (let i = 0; i < array.length; i++) {
        
        if (_.indexOf(array, array[i]) === i) {
            newArray.push(array[i]);
        } 
    }
    return newArray;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/**
 * I: an array and a function. the function will be called for each element passing in the element it's index and the array
 *    return the new array of elements for everything that is true
 * call the function for each element apssing the arguments (element, index, array)
 */


_.filter = function(array, func) {
    // declare an array literal
    let filtered = [];
    // loop over the array
    for (let i = 0; i < array.length; i++) {
    // if the functon passes then push the element into the new array.
        if (func(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

//  let odd = _.filter([1,2,3,4,5], function(e) {return e + 1})




// _.filter = function(array, func) {
//   return _.each(array, func);
// }

// console.log(_.filter([1,2,3,4,5], function(x){return x%2 === 0})) // -> [2,4]

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


_.reject = function(array, func) {
    let rejectVal = [];
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            rejectVal.push(array[i]);
        }
    }
    return rejectVal;
}

_.reject = function(array, func) {
    // return the filter function with parameters of the array and an anonymous function with the parameters element, index, and array
    return _.filter(array, function(element, i, array) {
        // if the reject function parameter is false then return the element 
        if (!func(element, i, array)) {
            return element;
        }
    });
}

console.log(_.reject([1,2,3,4,5], function(e){return e%2 === 0})); // -> [1,3,5]
    var inputData = ["a",1,"b",2,"c",4];
 console.log(_.reject(inputData, function(e,i,a){
        return typeof e === "string" || i < a.length/2;
    })) //, [2,4], "Should reject elements in an array.");

console.log('rej', _.reject([1,2,3,4,5], function(e) {return e % 2 === 1}));


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/**
 * I: an array, a function
 * call the function for each element passing in element, key and array
 */
 
 _.partition = function(array, func) {
    // create an array with 2 array literals, one for the test pass and fail
     let totalArray = [[],[]];
     // loop through the array
     for (let i = 0; i < array.length; i++) {
     // if the test passes, push each element into the the array at index 1
         if (func(array[i], i, array)) {
             totalArray[0].push(array[i]);
    // if the test fails push to the array at the second index.         
         } else {
             totalArray[1].push(array[i]);
         }
     };
    // return the total array
    return totalArray;
 }




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


/**
 * call the function for each element in the collection passing in i
 * I: collection and a function
 * O: 
 */
 
 _.map = function(collection, func) {
     // declare an array literal
     let collectionMap = [];
     // if the collection is an array then loop through the array.
     if(_.typeOf(collection) === 'array') {
        for (let i = 0; i < collection.length; i++) {
            // for each element push it into the collectionMap array
            collectionMap.push(func(collection[i], i, collection));
        }
    // if the collection is an object loop through the object;
     } else if (_.typeOf(collection) === 'object') {
         for (let key in collection) {
             // for each key/value pair up the value, key and collection into the collectionMap array.
             collectionMap.push(func(collection[key], key, collection));
         }
     }
     // return the collectionMap
     return collectionMap;
 }

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

/**
 * I: an array of objects and a prop
 * O: return an array containing the value of prop for every elecment in array 
 */

 _.pluck = function(array, prop) {
    // returng map with the arguments of array and a function that is the element index and array
    return _.map(array, function(element, i, array) {
      // return the array index prop.
      return array[i][prop];
     });
 }
 
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

/**
 * call a function for every element of collection with the parameter
 * if array function (element, i, collection)
 * if obejct function (value, key, collection)
 * if the return value of calling funciton is true for every element return true
 * if false for one return false
 * if funciton is not provided return true for if its truthy, false if not
 *
 * I: collection , functition 
 * O: a boolean value
 */

_.every = function(collection, func) {
    // declare a variable called test and set the value to true.
   let test = true;
   // use the each function to see if the collection is an array or an object
    _.each(collection, function(element, i, collection) { 
        // if the function is a function and the function fails then return false
        if (typeof func === 'function' && !func(element, i, collection)) { 
            test = false;    
            // if there isn't a function then return false if there is a falsey value in the collection
        } else if (!element) {
                test = false;
        }
    });
    return test;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/




/**
 * collection and a function
 * call function for every element of collection with 
 * if array: element, index and collection
 * if object: value, key collection
 * if the reutrn vaule of calling function is true for one element rertun true
 * if its falce for all otehr elements reutrn false
 */


_.some = function(collection, func) {
    // check to see if the collection is an array
    if (_.typeOf(collection) === 'array') {
        // loop over the array
        for (let i = 0; i < collection.length; i++) {
            // if the function doesnt' exist
            if (func === undefined) {
                // check to see if the element is true
                if (collection[i]) {
                    // if so return it 
                    return true
                }
            // if the function exists then call the function with the element, index and collection as arguments    
            } else {
                // if the function passes the test then return true
                if (func(collection[i], i, collection)) {
                    return true;
                }
            }
        }
    }
    // check to see if the colleciton is an object
    if (_.typeOf(collection) === 'object') {
        // loop through the collection
        for (let key in collection) {
            // if the function isn't defined then check if the value is true
            if (func === undefined) {
                // if true then return true
                if (collection[key]) {
                    return true;
                }
            // if there is a a function then call the function on each iteration calling the value, key and object
            } else {
                // if the function is true return true;
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    }
    return false;
}

let addOne = _.some([[], 2], function(e) {
    return e + 1;
});

// console.log('add', addOne);

// _.some = function(collection, func) {
//     // declare a variable test and set it to false
//     let test = false;
//     // use the each method to check if the collection is an array or object
//     _.each(collection, function(element, i, collection) {
//         // if func doesn't exist 
//         if (func === undefined) {
//             // check to see if the elements are all truthy
//             if (element) {
//                 test = true;
//             }
//         // if function exists run the function with the element index and collection as the arguments
//         } else {
//             // if the function passes the test then reassign the test val to true.
//             if (func(element, i, collection)) {
//                 test = true;
//             }
//         }
//     });
//     // return test
//     return test;
// }




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/**
 * takes an array, function and a seed
 * call fucntion for every element in the collection passing in the previous result, element
 * and index
 * use the return value of the function as the previous result for the next iteration
 * 
 *
 */
 
 
 
//  _.reduce = function(array, func, seed) {
//     // if seed is not defined
//     if (seed === undefined) {
//         // set seed to the first element of the array
//         seed = array[0];
//     // loop over the array starting at index 1
//         for (let i = 1; i < array.length; i++) {
//             // for each loop set seed to the function with the params of seed, the element and index
//             seed = func(seed, array[i], i);
//         }
//     } else {
//     // if seed is defined then loop over the array
//         for (let i = 0; i < array.length; i++) {
//         // set seed to be the function call with params of seed, element and index.
//             seed = func(seed, array[i], i);
//         }
//     }
//     return seed;
// }

_.reduce = function(array, func, seed) {
    let previousResult;
    if (seed !== undefined) {
        previousResult = seed;
        _.each(array, function(element, i, array) {
            previousResult = func(previousResult, element, i, array);
        });
    } else {
        previousResult = array[0];
        for (let i = 1; i < array.length; i++) {
            previousResult = func(previousResult, array[i], i, array);
        }
    }
    return previousResult;
}
 



// const mapObjectReduce = (object, callback) => {
//   // use reduce to run the object on each key value pair
//   return _.reduce(object, function(acc, curVal) {
//     callback(acc, acc[curVal], object);
//     console.log(acc);
//     return acc;
//   }, {});
// };

const name = {name: 'Jon', last: 'tenholder'};
function toUpper(str) {
  return str.toUpperCase();
}


const mapObjectReduce = (object, callback) => {

   let upper = _.reduce(object, (acc, curVal) => {
        // console.log(callback(curVal));
         if (!acc[curVal]) {
            object[curVal] = callback(curVal, acc[curVal], object);
         } else {
        // console.log(acc)
            acc = object[curVal];
         }
        return acc
    }, {});
  console.log(upper)
    return upper;
};


console.log(mapObjectReduce(name, toUpper));




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

/**
 * I: a many objects  
 * O: copy object 2 to object 1
 */
 
 _.extend = function(object1, object2, ...object) {
    return Object.assign(object1, object2, ...object);
 }
 
//  _.extend = function(obj1, ...objects) {
//      // use each to iterate over other objects
//      _.each(objects, function(e, i, a) {
//          // the element is going to be each object in the array
//          for(let key in e) {
//              // add the key/val pair to obj1
//              obj1[key] = e[key];
//          }
//      });
//      // output: updated object
//      return obj1;
//  }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

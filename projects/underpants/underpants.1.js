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
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (value === Date) {
        return 'date';
    } else if (typeof value === 'object') {
        return 'object';
    } else {
        return typeof value;
    }
};



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

// I: array and number
// O: return the first number of items in the array.
// C: 
// E: negative number, if not array return [], return first element if NaN or not given

_.first = function(array, number) {
    let newArray = [];
    // if array is not an array then return an array literal;
    if (!Array.isArray(array) || number < 0) {
        return newArray;
    } else if (typeof number !== 'number' || number === undefined) {
        return array[0];
    }
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    } 
    return newArray.splice(0, number);
}





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


// I: array number
// O: all array elements from the back of the array

_.last = function(array, number) {
    let newArray = [];
    if (!Array.isArray(array) || number < 0) return newArray;
    else if (isNaN(number) || number === undefined) return array[array.length - 1];
    else if (number > array.length) return array;
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray.splice(array.length - number, number);

}



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


// I: array value
// O: a number, the index of the first occurrence, -1 if not in array 
// C:
// E: multi occurences use the first occurrence and -1 if not in array

_.indexOf = function(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i;
        }
    }
    return -1;
}

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

// I: array and a value
// O: boolean value 

_.contains = function(array, value) {
   let test = false;
    for (let i = 0; i < array.length; i++) {
        array[i] === value ? test = true : false;
    }
    return test;
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

// I: collection and a function
// O: n/a

_.each = function(collection, func) {
    if (_.typeOf(collection) === 'array') {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else if (_.typeOf(collection) === 'object') {
        for (let key in collection) {
            func(collection[key], key, collection)
        }
    }
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// I: array
// O: all duplicates removed

_.unique = function(array) {
    let reducedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (_.indexOf(array, array[i]) === i) {
            reducedArray.push(array[i]);
        }
    }
    return reducedArray;
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

// I: array and function
// O: the array after the function has passed through 

_.filter = function(array, func) {
     let filteredArr = [];
     _.each(array, function (element, i, array) {
       if (func(element, i, array)) {
         filteredArr.push(element);
       } 
    });
    return filteredArr;
}


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

// I: array a function
// O: an array with tests that fail.

_.reject = function(array, func) {
    let rejected = [];
    _.filter(array, function(element, i, array) {
        if (!func(element, i, array)) {
            rejected.push(element);
        }
    });
    return rejected;
}



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


// I: array and function
// O: an array with two sub array first one is pass and second is fail

_.partition = function(array, func) {
   let total = [[],[]];
   _.filter(array, function(element, i, array) {
       if (func(element, i, array)) {
           total[0].push(element);
       }
   });
  _.reject(array, function(element, i, array) {
        if (!func(element, i, array)) {
            total[1].push(element);
        }
  });
   return total;
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
 * 
 */

_.map = function(collection, func) {
    const newArray = [];
    if (_.typeOf(collection) === 'array') {
         _.each(collection, function(element, i, array) {     
            newArray.push(func(element, i, array));
        });
    } else if (_.typeOf(collection) === 'object') {
         _.each(collection, function(val, key, collection) {
            newArray.push(func(val, key, collection));
        });
    }
    return newArray;
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
     return _.map(array, function(element, i, array) {
      return element[prop];
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


_.every = function(collection, func) {
    let test = true;
    // if a function is not provided then check to see if all values are truthy;
    if (func === undefined) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i]) test = true;
            else return false;
        }       
    } else if (_.typeOf(collection) === 'array') {
         _.each(collection, function(element, i, collection) {
          return func(element, i, collection) ? true : test = false;
            // if (func(element, i, collection)) test = true;
            // else return false;
        });
    } else if (_.typeOf(collection) === 'object') {
         _.each(collection, function(key, val, collection) {
            return func(key, val, collection) ?  true : test = false;
        })
    }
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

_.some = function(collection, func) {
    let test = false;
    if (func === undefined) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i]) return true;
            else test = false;
        }
    } else if (_.typeOf(collection) === 'array') {
        _.each(collection, function(element, i, collection) {
            if (func(element, i, collection)) test = true;
        });
    } else if (_.typeOf(collection) === 'object') {
        _.each(collection, function(key, val, collection) {
            if (func(key, val, collection)) test = true;
        });
    }
    return test;
}


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


_.reduce = function(array, func, seed) {
    let prevResult;
    // if the seed does not exist then set the seed the the first object in the array
    if (seed === undefined) {
        // if no seed is given then used the first index and continue on
        prevResult = array[0];
        for (let i = 1; i < array.length; i++) {
            prevResult = func(prevResult, array[i], i, array);
        }
    } else {
        prevResult = seed;
        _.each(array, function(element, i, array) {
           prevResult = func(prevResult, element, i, array); 
        });
    }
    return prevResult;
}





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


_.extend = function(obj1, ...objects) {
    return Object.assign(obj1, ...objects)
}
 
 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

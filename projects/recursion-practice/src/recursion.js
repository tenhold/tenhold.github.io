// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n) {
  // base case n = 0
  if (n === 0 || n === 1) {
    return 1;
  // the number is less than 0 return null
  } else if (n < 0) {
    return null;
  }
  // return n * factorial(n);
  return n * factorial(n - 1);
};

// console.log(factorial(2));

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array) {
// base case if array.length is 0
if (array.length === 0) {
  return 0;
}
// recursion case
return array[0] + sum(array.slice(1));
  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};


// 4. Check if a number is even.

// I: number
// O: boolean value if even then true if odd then false
// E: should work with negative nums

var isEven = function(n) {
  // base case if n is equal to 0 return true if n is equal to 1 return false
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  // check to see if n is less than 0
  if (n < 0) {
    // if so then add 2 to each time it runs
    return isEven(n + 2);
  }
  // recursion case return isEven n - 2
  return isEven(n - 2);
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21


var sumBelow = function(n) {
  // base case if n is equal to 0 return 0
  if (n === 0) {
    return 0;
  }
  // recursion case add the num - 1 with the function call
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  }
  return (n - 1) + sumBelow(n - 1);
  
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

// I: two numbers
// O: an array of numbers between the input numbers
// E: should accept negative numbers and numbers that have a higner starting value.

var range = function(x, y, resultArr = []) {
  // base case: when do we want to stop
  // if x is equal to y and x is equal to y - 1 or + 1 then return the array
  if (x === y || x === y - 1 || x === y + 1) {
    return resultArr;
    // if x is equal to y and x is 
  } 
  // recursion case: call the function and push the value of x into the array adding one to x.
  // run the loop if x > y 
  if (x > y) {
    // push x into the array subtracting one
    resultArr.push(x - 1);
    // return the range function with the arguements subtacting one from x, y and the array.
    return range(x - 1, y, resultArr);
  } else {
    // if y is larger than x then we are going to add x plus one to the array.
    resultArr.push(x + 1);  
    // returning the range function calling x + 1, y and the array.
    return range(x + 1, y, resultArr);
  }
}

console.log('range', range(1, 5));


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number




var exponent = function(base, exp) {
  // base case if exp is 0 then return 1
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } 
  
  // recursion case if exp is positive and even 
  if (exp < 0) {
    return 1 / (exponent(base, -exp));
  } 
  return base * exponent(base, exp - 1);
};

// console.log(exponent(-3, 4))

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

/**
 * should return a boolean value
 * I: num
 * O: boolean if its a power of 2 then return true;
 */
 
var powerOfTwo = function(n) {
  // base case:
  // if n is equal to one return true
  if (n === 1) {
    return true;
    // make sure we only have positive numbers and if anything isn't equal to one return false
  } else if (n < 1) {
    return false;
  }
  // recursive Case:
  // keep calling the function until I find if n is 1 or 0
  // call the function and divide by 2 each time it runs
  return powerOfTwo(n / 2);
};

console.log(powerOfTwo(128))

// 9. Write a function that accepts a string a reverses it.

/**
 * takes a string and reverses it;
 * Racecar -> racecaR
 * I: string
 * O: string reveresed
 */
 
var reverse = function(string) {
  // base case:
  // I want the function to return when the length of the string is 0
  if (!string.length) {
    return '';
  }
  // recursion case: 
  // start at the last index of the string and add it to the start of the string
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

console.log(reverse('Racecar'));

// 10. Write a function that determines if a string is a palindrome.

/**
 * Should return a boolean value if the string is palindrome
 * I: string
 * O: boolean value
 * E: should ignore case and spaces
 * 
 *  r a c e c a r
 *  |_|_|___|_|_|
 *  |_|_______|_|
 *  |___________|
 */
var palindrome = function(string) {
  let stringL = string.replace(/\s/g,'').toLowerCase();
  // base case:
  // return a boolean value if the first half of the string equals the second half
  if (stringL[0] !== stringL[stringL.length - 1]) {
    return false;
  } else if (stringL.length === 1) {
    return true;
  }
  // recurstion Case:
  // remove the first and last element of the string each time the function runs
  return palindrome(stringL.slice(1, -1));
};

// console.log(palindrome('Racecar'));

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

/**
 * I: two numbers
 * O: the remander of the two numbers
 * E: shoudn't use complex math and work with negative numbers
 */
 
 // to figure out a reminder; x divide y, round to nearest interger then divid that by y, take the original x and subtract the new number to get the remander
 
var modulo = function(x, y) {
  // // base case:
  // // return a number when it can't be divided anymore
  // if (x > 0) {
  //   return;
  // } else if (x < 0) {
  //   return;
  // }
  // // recursive case;
  // //  x divided by y
  // return modulo(x / y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// pseudocode must be outside the code block

/**
 * I: two numbers
 * O: the two numbers multiplied
 * E: work with negative numbers
 */
 // base case:
 // when y = 0
 // recursion case
 // add x for each run of the the function 
 // if negative flip x and add it each run of the function but increasing y each time
 // x + multiply(x, y = 1);
 
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }
  
  if (y > 0) {
    return x + multiply(x, y - 1);
  } else if (y < 0) {
    return  -x + multiply(x, y + 1);
  }
};

// console.log(multiply(5, 5));

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

/**
 * I: two numbers
 * O: the numbers divided
 * E: should work with negative numbers
 */

// base case:
// when y = 0

// recursion case
// if y > 0 then we want to subtact x from the function while subtacting 1 from y

var divide = function(x, y) {
  // if (y === 0) {
  //   return 0;
  // }
  
  // if (y > 0) {
  //   return x - divide(x, y - 1);
  // }
};

// console.log(divide(10, 5));

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

/**
 * I: two strings
 * O: boolean value true if the strings are the same
 * C: recurssion
 * E: N/A
 */
var compareStr = function(str1, str2) {
  // base case: 
  // when string.length is 0; or when str1 does not equal str2
  if (str1[0] !== str2[0]) {
    return false;
  } else if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  
  // recursion case:
  // trim each string from the start at the function call
  return compareStr(str1.slice(1), str2.slice(1))
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

/**
 * I: string and a default array literal
 * O: an array with each character in the string its own index
 */
var createArray = function(str, returnArr = []){
  // base case:
  // str === 0
  if (str.length === 0) {
    return returnArr;
  }
  
  // recursion case:
  // push the first element into the array and chop off the first element
  returnArr.push(str[0])
  return createArray(str.slice(1), returnArr);
};

// 17. Reverse the order of an array

/**
 * I: an array
 * O: the array reversed
 */
var reverseArr = function (array, revArray = []) {
  // base case
  // when the array.length is 0
  if (array.length === 0) {
    return revArray;
  }
  
  // recursion case
  // push the last element to the array and cut it off
  revArray.push(array[array.length - 1]);
  return reverseArr(array.slice(0, -1));
};


console.log(reverseArr([1,2,3,4,5]));

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------

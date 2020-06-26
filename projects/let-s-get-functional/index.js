// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-tenhold');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *  // start from enviorment directory
 *    npm start --prefix ./tenhold.github.io/projects/let-s-get-functional
 *  // start from tenhold.github.io directory
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
 
 /**
  * find male customers 
  * I: array
  * O: number
  * C: use filter
  */

var maleCount = function(array) {
   // invoke the filter function and the array as first argument
   return _.filter(array, function(customerObj) {
      // filter out all the male customers
     return customerObj.gender === 'male';
    
   }).length;
};

/**
 * find female customers 
 * I: array
 * O: numbmer
 * C: use reduce
 */
 

var femaleCount = function(array) {
    // run reduce passing in the array and a fucntion that takes a counter and a customer obj
   return _.reduce(array, function(counter, customerObj) {
        // if the gender key's value is female
        if (customerObj.gender === 'female') {
            // add one to counter
            counter++;
        }
        return counter;
    }, 0);
}


// let females = femaleCount(customers);
// console.log(females)

/**
 * find the oldest customers name
 * I: array
 * O: string
 */

// // filter or reduce
var oldestCustomer = function(array) {
    // use reduce to reduce the array to to oldest person
    const oldestCust = _.reduce(array, function(oldest, curPerson) {
        // if the age of the customer is greater than the oldest person return that customer.
        if (curPerson.age > oldest.age) {
            return curPerson;
        }
        return oldest;
    });
    // once we have the oldest customer then we want the return just the name.
    return oldestCust.name;
}

// console.log(oldestCustomer(customers));
// oldestCustomer(customers);

// console.log(oldest);


/**
 * find the youngest persons name
 * I: array
 * O: string
 * using reduce extract just the youngest persons name
 */
 
var youngestCustomer = function(array) {
   // declare a variable with the function reduce. this will return the object of the youngest person in the array
    const youngCust = _.reduce(array, function(young, curPerson) {
        // if the current persons age is less than the youngest person's age then redeclare young to the curPerson
        if (curPerson.age < young.age) {
            return curPerson;
        }
        // each time return young and loop again on the last loop we will have the youngest person.
        return young;
    });
    // return just the name from the object.
    return youngCust.name;
}


/**
 * find the overage balance of all the customers
 * I: Array
 * O: Number
 * reduce
 */
 
var averageBalance = function(array) {
  // use reduce to reduce all the balances to one nubmer
  const totalBalances = _.reduce(array, function(total, curVal) {
    // convert the balance into a nubmer so we can use it
    const numBalance = parseFloat(curVal.balance.split(',').join('').slice(1));
    // add each balance added to the total for every index
    return (total += numBalance);
  }, 0);
  // return the totals and devide by the index amount to get the average.
  return totalBalances / array.length
};

// console.log(averageBalance(customers))

// filter
/**
 * find out how many names begin with a character
 * I: Array, letter
 * O: number
 * 
 */
// var firstLetterCount = function(array, letter) {
//     let total = 0;
//     let lowerLetter = letter.toLowerCase();
//     _.map(array, function(customerObj, i, array) {
//         if (customerObj.name[0].toLowerCase() === lowerLetter) {
//           total++
//         }
//     });
//     return total;
// }

var firstLetterCount = function(array, letter) {
// change the letter argument to lowercase so inupt case dosen't matter.
  let letterLower = letter.toLowerCase();
  // reduce the array  with a counter and each object and return the value;
  return _.reduce(array, function(counter, customerObj) {
    // if the customer name is equal to the letter then add one to the counter.  
       if (customerObj.name[0].toLowerCase() === letterLower) {
           counter++;
       }
      // return the counter and run the loop again. 
       return counter;
   }, 0);
}

/**
 * find how many friends of a given customer have names that start with a given number
 * I: array, customer, letter
 * O: number
 * E: make sure that whatever input case doesn't matter
 * 
 * friends is a key value that has an array of objects.
 * loop through the customer array to find the customer, loop through the customer's friends
 * to find the characers that match the first letter
 */

var friendFirstLetterCount = function(array, customer, letter) {
    // declare a variable to hold the index of the customer index
    let customerIndex = [];
    // use filter to check to see if the customer's name is in the array
    _.filter(array, function(customerObj, i) {
        // if it is return the index to the customerIndex var if not return -1
        return customerObj.name.toLowerCase() === customer.toLowerCase() ? customerIndex = i : -1;
    });
    // use reduce to get the number of each friend the array will be the friends array of the
    // friend we found that is the same as the customer
    return _.reduce(array[customerIndex].friends, function(total, currentFriend) {
        // if the first letter is the same as one if the first characters in the friends name array 
        // then add one to the total. using to lower case to ignore case sensitivity 
        if (currentFriend.name[0].toLowerCase() === letter.toLowerCase()) {
            total++
        }
        // return the total and return the reduce function
        return total;
    }, 0);
};



/**
 * find the customer's names that has the given customer's name in there friend count
 * I: array, name;
 * O: array
 * input is a customer name and output is an array of all the customers they are friends with
 * loop though the friends array of the inputed customer, 
 */
 

 var friendsCount = function(array, name) {
    // declare a var to store the names of friends 
    let friendsArray = [];
    // use each to loop though the customers array
    _.each(array, function(customerObj) {
        // use filter to find a name that macthes the argument name.
        _.filter(customerObj.friends, function(friendsObj) {
            // convert the names in the friends array and the argument name and check if they match
            if  (friendsObj.name === name) {
                //   if we find a match push friends array
                 friendsArray.push(customerObj.name);
            }
         });
    });
    // return the friendsArray;
    return friendsArray;
};
 
// var friendsCount = function(array, name) {
//   _.filter(array, function(customerObj) {
//       const friendsObj = customerObj.friends;
//       _.each(friendsObj, function(friend))
//   })  
// };
 
 
 
// var friendsCount = function(array, name) {
//     return _.reduce(array, function(peopleArr, curCustomer) {
//         const friendsArr = curCustomer.friends;
//         _.each(friendsArr, function(friendObj) {
//             if (name === friendObj.name) {
//                 peopleArr.push(curCustomer.name);
//             }
//         });
//         return peopleArr;
//     }, []) 
// }


// console.log(Array.isArray(friendsCount(customers, 'shelly walton')));
console.log(friendsCount(customers, 'Buckner Kennedy'));



/**
 * find the 3 most common tags among all customers
 * I: array
 * O: array
 * loop through the array of objects
 * create an array to push all the the elements from everyones tags
 */
var topThreeTags = function(array) {
    let tagsArray = _.reduce(array, function(totalTags, curTag) {
       // multiple array and want to reduce them into one array 
       return totalTags.concat(curTag.tags);
    }, []);
    // take the array of all the words, count them and push them into an object
    let tagsOrdered = _.reduce(tagsArray, function(totalTags, curTag, i) {
        // if the word exists the add one to the counter
        if (totalTags[curTag]) {
            totalTags[curTag]++;
        } else {
        // if not then add it to the object and set the counter to 1
            totalTags[curTag] = 1;
        }
        // return the object each loop
        return totalTags;
    }, {});
    // take the object of the words with there count and turn them into an array.
    const tagSorted = _.map(tagsOrdered, function(amount, tags) {
       // return an array with the key and value
        return [tags, amount];
    });
    
    // sort the array basied on the number
    const sortedTag = tagSorted.sort(function(a, b) {
        return b[1] - a[1];
    });
    // loop through the sorted array and push the top 3 words to a new array.
    const top3 = [];
    for (let i = 0; i <= 2; i++) {
        top3.push(sortedTag[i][0]);
    }
    // return the top 3 words.
    return top3;
};

console.log(topThreeTags(customers));


/**
 * create an object that holds the genders of the customers
 * I: array
 * O: object
 */
 
var genderCount = function(array) {
    // use reduce to create an object to store all the genders the seed will be an object literal
    return _.reduce(array, function(totalCustObj, curCustObj, i) {
        // if the key of the gender exists then add one to the value;
        if (totalCustObj[curCustObj.gender]) {
            totalCustObj[curCustObj.gender]++
        } else {
        // if the key of gender does not exist then set the value to 1.
            totalCustObj[curCustObj.gender] = 1;
        }
        return totalCustObj;
    }, {});
};

// console.log(genderCount(customers));


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

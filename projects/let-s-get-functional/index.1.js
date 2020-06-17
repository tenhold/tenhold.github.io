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
    let counter = 0;
    _.filter(array, function(customerObj) {
        if (customerObj.gender === 'male') counter++;
    });
    return counter;
}


/**
 * find female customers 
 * I: array
 * O: numbmer
 * C: use reduce
 */
 

var femaleCount = function(array) {
    // run reduce passing in the array and a fucntion that takes a counter and a customer obj
   return _.reduce(array, function(total, currentCust) {
       if (currentCust.gender === 'female') total++
       return total;
   }, 0)
}


let females = femaleCount(customers);
// console.log(females)

/**
 * find the oldest customers name
 * I: array
 * O: string
 */

// // filter or reduce
var oldestCustomer = function(array) {
    return _.reduce(array, function(oldest, customerObj) {
       if (customerObj.age > oldest.age) {
           oldest = customerObj;
       }
       return oldest;
    }).name;
}

console.log(oldestCustomer(customers));
oldestCustomer(customers);

// console.log(oldest);


/**
 * find the youngest persons name
 * I: array
 * O: string
 * using reduce extract just the youngest persons name
 */
 
var youngestCustomer = function(array) {
   return _.reduce(array, function(youngest, curCustObj) {
       if (curCustObj.age < youngest.age) youngest = curCustObj;
       return youngest;
   }).name;
}

// console.log(youngestCustomer(customers));

/**
 * find the overage balance of all the customers
 * I: Array
 * O: Number
 * reduce
 */
 
var averageBalance = function(array) {
  // use reduce to find the average balance
  return _.reduce(array, function(total, customerObj) {
      // the balance is a string so we need to convert it into a number by getting rid of the $ and ,
      const money = parseFloat(customerObj.balance.split(',').join('').slice(1));
      total = total + money;
      return total;
  }, 0) / array.length;
};

// console.log(averageBalance(customers))

// filter
/**
 * find out how many names begin with a character
 * I: Array, letter
 * O: number
 * 
 */

var firstLetterCount = function(array, letter) {
    return _.reduce(array, function(letterTotal, customerObj) {
        if (letter.toLowerCase() === customerObj.name[0].toLowerCase()) {
            letterTotal++
        }
        return letterTotal;
    }, 0);
}

// console.log(firstLetterCount(customers, 'd'));

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
    const customerIndex = _.reduce(array, function(custName, customerObj, i, array) {
        if (custName.name === customer) {
            return custName;
        }
    });
     return _.reduce(customerIndex.friends, function(total, friendsObj, i, array) {
        // console.log(friendsObj)
         if (friendsObj.name[0].toLowerCase() === letter.toLowerCase()) {
             total++;
         }
         return total;
     }, 0); 
};

console.log(friendFirstLetterCount(customers, 'Adele Mullen', 'J'))


/**
 * find the customer's names that has the given customer's name in there friend count
 * I: array, name;
 * O: array
 * input is a customer name and output is an array of all the customers they are friends with
 * loop though the friends array of the inputed customer, 
 */
 

 var friendsCount = function(array, name) {
    // loop through the customerObj to the friends list
    let names = [];
     _.each(array, function(customerObj) {
        return _.filter(customerObj.friends, function(friendsObj) {
            if (friendsObj.name === name) {
                names.push(customerObj.name);
            }
        });
    });
    return names;
};
 


console.log(friendsCount(customers, 'Olga Newton'));
// console.log(Array.isArray(friendsCount(customers, 'shelly walton')));



/**
 * find the 3 most common tags among all customers
 * I: array
 * O: array
 * loop through the array of objects
 * create an array to push all the the elements from everyones tags
 */
var topThreeTags = function(array) {
    // loop through the array of object to reduce it to just the tags
    const tagsArray = _.reduce(array, function(tags, customerObj) {
        tags.push(customerObj.tags)
        return tags
    }, []);
    const allTags = tagsArray.join('').split(',');
    const tagsCounted = _.reduce(allTags, function(count, tag) {
        count[tag] ? count[tag] ++ : count[tag] = 1
        return count
    }, {});
    let tagsArrayNum = [];
    _.each(tagsCounted, function(val, key) {
        tagsArrayNum.push([key, val]);
    })
    tagsArrayNum.sort(function(a,b) {
        return b[1] - a[1];
    });
    let top3 = []
    for (let i = 0; i < 3; i++) {
        top3.push(tagsArrayNum[i][0])
    }
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

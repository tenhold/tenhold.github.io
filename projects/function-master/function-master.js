//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes an object and returns an array
/**
 * I: object
 * O: array with the key, value ect..
 */
 
function objectValues(object) {
    // create an array literal to store our key value pairs from the object
    let array = [];
    // for in loop to loop through the object and extract the key / value pairs
    for (let key in object) {
        // push the  value into the new array
        array.push(object[key]);
    }
    return array;
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take an object and return all its keys into a string speerated by a space
 * I: object
 * O: a string
 */

function keysToString(object) {
    // array literal to stor the keys of the object
    let arrayKey = [];
    // loop through the object
    for (let key in object) {
        // push the key into the arraykey
        arrayKey.push(key);
    }
    // return and join the array at each space.
    return arrayKey.join(' ');
}

// var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
// console.log(keysToString(objectTwo));
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 *  take in an object and return all values in the object to a string seperated by space
 * I: object
 * O: string of values
 */

function valuesToString(object) {
    // array literal to store the values of the object
    let arrayValues = [];
    // loop through the object
    for (let key in object) {
        // if the value is a string we are going to push it into the arrayValue array
        if (typeof object[key] === 'string') {
            arrayValues.push(object[key]);
        }
    }
    // return and join the array at each space
    return arrayValues.join(' ');
}
var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
console.log('values', valuesToString(objectTwo));

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * should take an argument and return 'array' its an array and 'object' if its an object
 * I: either obect or array
 * O: a string eitehr object or array
 */
function arrayOrObject(collection) {
    // place to store values if it test fails
    let testFail = '';
    // making sure the object isn't a null value
    if (collection === null) {
        testFail = null;
    // checking to see if the object is a date
    } else if (collection === Date) {
        testFail = 'date';
    // checking for an array and if so return 'array'
    } else if (Array.isArray(collection)) {
        return 'array';
    // checking ot see if it is an object and if so return 'object'
    } else if (typeof collection === 'object') {
        return 'object';
    }
}
 
console.log(arrayOrObject(objectTwo))

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * takes in a string, and capitalizes the word
 * I: a stirng of a word
 * O: that word with the first letter capitalized
 */

function capitalizeWord(string) {
    // capitalizing the first letter of the string
    let capLetter = string[0].toUpperCase();
    // convert the string into an array splitting of the first letter and then joining them back to form a stirng. 
    let lowerLetters = string.split('').splice(1).join('');
    // returning the whole string with the cap letter
    return capLetter + lowerLetters;
}

// console.log(capitalizeWord('hello'));

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Takes in a string of words and cap all the words returning a new string
 * I: a sentence
 * O: the sentence with all first letters capitalized
 */
function capitalizeAllWords(string) {
    // split each word at the space into an array
    let word = string.split(' ');
    let capWordArr = [];
    // use a for loop to loop through the word array.
    // each time I'm going to split each word by letters capitalize the first letter and concatnate it with the remaining letters
    for (let i = 0; i < word.length; i++) {
        let letters = word[i].split('');
        capWordArr.push(letters[0].toUpperCase() + letters.splice(1).join(''));
    }
    return capWordArr.join(' ');
}

console.log(capitalizeAllWords('hello how are you doing?'));

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take a object with a name property and return the string 'welcome <name>'
 * I: object
 * O: string 
 * E: object should have the key of name:
 */
function welcomeMessage(object) {
    // loop throught the object to find if there is a key that contains the value name
    for (let key in object) {
        if (key === 'name') {
            return 'Welcome ' + capitalizeWord(object[key]) + '!';
        }
    }
}

const myObj = {name: 'jon', species: 'human'};

console.log(welcomeMessage(myObj));



//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take a object with a name and a species and return a string 'name is a species'
 * I: object
 * O: string with the object values of name and species
 * C: obejct must contain both name and species keys
 */ 

function profileInfo(object) {
// if statement checking to see of object contains both a name and a species key
    if (object.name && object.species) {
        return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;
    }
}


console.log(profileInfo(myObj))


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take an object if object has noises array then return them as a string if no noises 
 * then reuturn 'there are no noises'
 * I: an object
 * O: a string with the nosies 
 * C: object must contain an array of noises
 */
function maybeNoises(object) {
// if statement to check to see if there is a key of noises
    let noises = [];
    if (object.noises && object.noises.length > 0) {
        // for loop that will print the nosies in a string 
        for (let i = 0; i < object.noises.length; i++) {
            noises.push(object.noises[i]);
        }
    } else {
        return 'there are no noises';
    }
    return noises.join(' ');
}

let myNoises = {noises:["bark", "woof", "squeak","growl"]}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take a string of words and a word if word is in the string return true if not
 * return false
 * I: 2 parameters a string of words and a word
 * O: boolean value
 */

function hasWord(string, word) {
    // create an array litereal to hold the array of strings
    let stringArr = string.split(' ')
    // use a for loop to break the string in to an array, each index contains a word
    for (let i = 0; i < stringArr.length; i++) {
        // use an if statement to check if the word is directly equal to a word in the array
        if (stringArr[i] === word) {
            return true;
        }
    }// if not return false
    return false;
}

var data = "This is a super awesome string of words";

console.log(hasWord(data, 'string'));

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * should take a name and a object add the name to the objects friends array 
 * and return the object
 * I: 2 parameters, one string and an object
 * O: the object
 * C: the object must have the key of friends.
 */
 
function addFriend (name, object) {
   // find the array in the object and push the name to the end of the array
    object.friends.push(name);
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take a name and an object. if the name is in the object friends array
 * then reutrn true if not return false.
 * I: 2 parameters a string and a object
 * O: boolean value
 * C: object must contain a friends array
 */

function isFriend(name, object) {
 // if an array exists then loop through it
    if (Array.isArray(object.friends)) {
        // loop through the array
        for (let i = 0; i < object.friends.length; i++) {
            // if statement to see if the friend is in the array
            if (object.friends[i] === name) {
                return true;
            }
        };
        // if there is an array but the name isn't in it then return false
        return false;
    } else {
    // if not an array return false
    return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * takes a name and an array of objects. return an array with people the name isn't
 * friends with
 * I: string and an array
 * O: an array
 * C: the object must conain objects with arrays.
 * 
 * loop over the data array to get access to the friends array
 * 
 */


function nonFriends(name, array) {
    //loop over the array to pull oout the friends array
    let notFriends = [];
    for (let i = 0; i < array.length; i++) {
        let friends = array[i].friends;
        if (name !== array[i].name && !friends.includes(name)) {
          notFriends.push(array[i].name);
        } 
    }
    // return notFriends;
    return notFriends;
}
  var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];

console.log(nonFriends('jimmy', data));

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take 3 parameters a key and a value. if the key exists then update key with value
 * if the key dosen't exist then create a new key/value pair
 * I: 3 params first is a object, second is a key third is a value
 * O: the object modified
 */
function updateObject(object, key, value) {
    // create a for in loop to check if the key exists
      for (let key1 in object) {  
        // if the parameter key is directly equal to the the input object then update the key to the new value
        if (object[key] === object[key1]) {
            object[key1] = value;
        }
      }
      // if not then add a new key and value pair.
    object[key] = value
    return object;
}
 var data2 = {a: "one", b: "two", "hokey": false};
 console.log(updateObject(data2, "b", "three"));
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Takes an object and an array of strings. if any properties are are in the array then remove them.
 * I: 2 params 1 object and an array of strings
 * O: the object with any props removed
 * C: the array must contain strings
 */

function removeProperties(object, array) {
    //  create a loop throught the object and declare a new object that is a copy of object
    let newObj = object;
    for (let key in object) {
      // for each loop in the object loop through the array to see if the values are equal
      for (let i = 0; i < array.length; i++) {
        // if a string in the array is equal to the key in the object then push it to the new object 
        if (array[i] === key) {
        // if the string is the same as the key in object then delet it.
          delete object[key];
        }
      }
    }
    // return the newObj
    return newObj;
}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * take an array and remove all the duplicates 
 * I: an array
 * O: the array with duplicates reduced
 */

// function dedup(array) {
//     // create an array to store words
//   let reducedArr = [];
//   // loop through the array and 
//   array.forEach(word => {
//       // if the word is not in the reducedArr then we'll push into the array, if It matches then do nothing.
//     if (!reducedArr.includes(word)) {
//       reducedArr.push(word);
//     }
//   })
//   return reducedArr;
// }

function dedup(array) {
    // remove all duplicates in the array
    // create an array to hold the non duplicates
    const reducedArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!reducedArr.includes(array[i])) {
            reducedArr.push(array[i]);
        }
    }
    return reducedArr;
}


var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];

console.log(dedup(arrayOne)) // [1,2,3,4,5,"a","b","c"]);
console.log(dedup(arrayTwo))

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
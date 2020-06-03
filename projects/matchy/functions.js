/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function 2 parameters one is an array and the other is a string
// I: an array and string
// O: object if it exists null if not

function search(array, name) {
    for (let i = 0; i < array.length; i++) {
        // if statement if string is the same as the object then return the array
        if (name === array[i].name) {
            return array[i];
        }
    }
    return null;
}

console.log('search', search('animals', 'Tony'));
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function replace that takes 3 parameters 
/**
 * I: array, string, object;
 * O: if the string is in the object then repleace it with the new object, if not do nothing.
 */ 
 
 function replace(animals, name, replacement) {
     // for loop looping through the array
     for (let i = 0; i < animals.length; i++) {
         if (name === animals[i].name) {
            animals[i] = replacement;
         }
     }
 };

var pig = {
    name: 'jon',
    species: 'pig'
};

// console.log('replace', replace('animals', 'Tony', 'pig'));
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** declare a function called remove that takes two parameters an array and a string
 *  if the array exists then remove the object if not do nothing.
 */
 
 function remove(animals, name) {
     for (let i = 0; i < animals.length; i++) {
         if (name === animals[i].name) {
             animals.splice(i, 1);
         }
     }
 }


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** 
 * declare a fucntion called add. it takes 2 parameters an array and a object, it will
 * push the object into the array if name > 0, species is > 0 and the name is not equal
 * to any other names.
 */ 
 
 //I: 2 parameters one array and an object
 // O: add the object to the array if it doens't exist in the 
 
 function add(array, animal) {
     // declare a variable newAnimal to store the animal object as it loops through.
     var newAnimal = {};
      // a for loop that loops through the animals array
     for (let i = 0; i < array.length; i++) {
         // if name length is greater than 0 and species is greater than 0 and the object name does not equal an name in the array then we wnat to add it to a new animal object
        if (animal.name.length > 0 && animal.species.length > 0 && array[i].name !== animal.name) {
            newAnimal = animal;
        // once it finds a matching name we want to exit the loop so we return nothing.
        } else { 
            return;
        }
     }
     // push the object that has been verifed it isn't already in the array and pushes it into the array.
        array.push(newAnimal)
 }

// add(animals, pig);


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

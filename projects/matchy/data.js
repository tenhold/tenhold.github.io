/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// decalre an variable called animal to an empty object
var animal = {};
// using dot notation give it a key of species and the value is ape
animal.species = 'Tiger'; 
// using bracket notation a key of name and a value of a string.
animal['name'] = 'Tony';
// using dot notaiton give a key noises the value of an empty array.
animal.noises = [];
// print the animal object to the console.
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a variable noises and assign it to any empty array.
var noises = [];
// using bracket notation give the noises a string value of a noise
noises[0] = "They're Greattttttt!";
// using .push() add another noise to the end of the noises array;
noises.push('Sugar');
// using .unshift() add another noise to the the start of the array;
noises.unshift('Frosted Flakes');
// using bracket noation and noises.length -1 to get access to the end of the array add another noise to the end of the array
noises[noises.length] = 'Grrrr';
// print the length of noises
console.log('noises length', noises) // prints 4
// print the last element in the array
console.log(noises[noises.length - 1]);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign noises to the animal using bracet notation
animal['noises'] = noises;
// using dot notation and pushing to the end of the array adding another noise
animal.noises.push('atettt!');

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 *  You can access properties on an object by either using dot notation
 *  or bracket notation. You have to use bracket notation when you are 
 *  looping or you are trying to access a stricly defined spot.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *  
 *  Arrays can only be accessed by bracket noation. you can access by
 *  putting that index that you want to find or by using the .length
 *  to find the last element in the array.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a variable animals assigned to an empty array
var animals = [];
// using the .push method to add the object of animal to our empty animals array.
animals.push(animal);

// creating a new duck object that has the same key/value pairs as or animal object
var duck = {
    species: 'Duck',
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};

// using the push method, we are addng the duck object to the end of the animals array.
animals.push(duck);

// console.log(animals)

// create a 2 new animal objects. it should contain a species, name and 2 noises in an array

var lion = {
    species: 'Tiger',
    name: 'Simba',
    noises: ['ROOR', 'Growl']
};

var pumbaa = {
    species: 'Warthog',
    name: 'Pumbaa',
    noises: ['Oink Oink', 'Snort']
};

// using the splice method adding both new animal objects to the animals array
animals.splice(animals.length, 0, lion, pumbaa);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use an array to store the list of the animals friends
// I choose friends as an array becasue it's a structured list and we can use different methods to access specific indexes

var friends = [];

// create a function called getRandom that takes the animal array. we will use Math.random to get a random index and put the name of that index into the
// the friends array
/**
 * I: 1 pramaater an array
 * O: a random number (index) from the animals array
 */ 
 
function getRandom(animals) {
    // using the floor method to return a whole number inside we are taking the length of the animals array and multiplying it by a random number between 0 and 1.
    // we are returning that number should give us 0 through 3
    return Math.floor(Math.random() * animals.length);
}

// declaring a random animals and setting it equal to the animals array at a random index and pulling the name from it
var randomAnimal = animals[getRandom(animals)].name;

// using the push method to add that random name to our friends array
friends.push(randomAnimal);

animal['friends'] = friends;


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
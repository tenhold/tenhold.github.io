// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1,   'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

// I: three parameters a number (id), first name (string), lastname (string)
// O: an object that stores each contact
// C: 
// E: the first prameter needs to be a number, the 2nd and 3rd need to be strings.

function makeContact(id, nameFirst, nameLast) {
    // create and return object to store the contact
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 

const jon = makeContact(1, 'Jon', 'Tenholder');
const paige = makeContact(2, 'Paige', 'Tenholder');
const sol = makeContact(3, 'Sol', 'Randolph');


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // create an array to store our contact objects as we add them
    var contacts = [];
    // add a contact that takes one parameter, the contact object and pushs it to the empty array;
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // add contact will be a function that takes one parameter a contact object that was created earlier
        // the functon will push it into the contact array and return the array.
        addContact: function(contact) {
            contacts.push(contact);
            return contacts;
        },
        // function that takes a string fullName. 
        // if it exists will return the object, undefineded if it doesn't exist
        findContact: function(fullName) {
            let nameSplit = fullName.toLowerCase().split(' '); // declare a var that has the string inputed to lowercase and split into an array
            for (let i = 0; i < contacts.length; i++) { // for loop through the conacts array.
                let lowerFirst = contacts[i].nameFirst.toLowerCase(); // declare a var that stores the looped contacts first names all lowercase.
                let lowerLast = contacts[i].nameLast.toLowerCase(); // declare a var that stores the looped contacts last names all lowercase.
                if (nameSplit[0] === lowerFirst  && nameSplit[1] === lowerLast) { // check to see if the first name AND last name are the same 
                    return contacts[i];  // if so return the object
                } else {
                    return undefined; // if not return undeifined.
                }
            }
        },
        // function that deletes a contact. it takes one parameter contact and deletes it from the array.
        // I: a variable string
        // O: output, n/a deletes a contact
        removeContact: function(contact) {
            for (let i = 0; i < contacts.length; i++) { // loop over the contacts array
                if (contact === contacts[i]) { // if a contact is found
                   return contacts.splice(i, 1); // remove it from the array.
                }
            }    
            
        },
        // I; n/a
        // O; a string of the first name and last name on different lines
        printAllContactNames: function() {
            let nameArray = []; // declare an array literal
            for (let i = 0; i < contacts.length; i++) { // loop through the contacts array.
                nameArray.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`); // push the names of everyone in the array into the nameArray
            }
            return nameArray.join('\n'); // join the array to create a string that is broken by a new line.
        }
        
    }
}


// console.log(makeContactList.);

let newList = makeContactList();
newList.addContact(jon);
newList.addContact(paige);
newList.addContact(sol);


console.log(newList.printAllContactNames());

// console.log('find name', newList.findContact('Jon tenholder'));

newList.removeContact(2);

console.log(newList.printAllContactNames());



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
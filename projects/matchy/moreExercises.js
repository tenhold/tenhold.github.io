var data = { results: [ 
  { animal: 'fox', 
    numberOfLegs: 4, 
    says: '??', 
    matches: 
      [ 'dog', 'cat', 'pig']
  },
  { animal: 'frog', 
    numberOfLegs: 4, 
    says: 'ribbit', 
    matches: 
      [ 'whale', 'cat', 'pig', 'rabbit']
  },
  { animal: 'dog', 
    numberOfLegs: 4, 
    says: 'woof', 
    matches: 
      [ 'dog', 'fish', 'pig']
  },
  { animal: 'human', 
    numberOfLegs: 2, 
    says: 'hello', 
    matches: 
      [ 'frog', 'duck', 'pig']
  },
  { animal: 'fish', 
    numberOfLegs: 0, 
    says: 'blub', 
    matches: 
      [ 'dog', 'rabbit', 'frog', 'human']
  },
  { animal: 'whale', 
    numberOfLegs: 0, 
    says: 'aaarrrhhh', 
    matches: 
      [ 'duck', 'fish', 'pig']
  },
  { animal: 'duck', 
    numberOfLegs: 2, 
    says: 'quack', 
    matches: 
      [ 'fish', 'human', 'chicken', 'whale']
  }
  ]};

  // Use the .length property to console.log the length of the results
  // array.
    
  console.log(data.results.length);
    
  // Imagine you want are making a search results page,
  // (console.log) all of the animal names in order.
  
  // loop through the array.
  let animalsArray = [];
  for (let i = 0; i < data.results.length; i++) {
    animalsArray.push(data.results[i].animal);
  }
  
  const animalsSorted = animalsArray.sort();
  console.log(animalsSorted);
  
    
  
  // Next, Capitalize the first letter of each name and put a label
  // Your end result should look like this:
  // Name: Fox
  // Name: Dog
  // Name: Frog
  // Name: Human
  // Name: Fish
  // etc.

  
  // loop through the array using a for loop.
  function capitalize(array) {
    let animalName = [];
    for (let i = 0; i < array.length; i++) {
      // take the first index and toUpperCase and concatnate with the rest of the string splitting off the first index
     let animalsCap = (array[i][0].toUpperCase() + array[i].split('').splice(1).join(''));
     animalName.push(`name: ${animalsCap}`);
    }
    return animalName.join('\n');
  }
  
  console.log(capitalize(animalsSorted));
  
  // Next, console.log the number of legs next to their name.
  // Your end result should look like this:
  // Name: Fox, Legs: 4
  // Name: Dog, Legs: 4
  // Name: Frog, Legs: 4
  // Name: Human, Legs: 2
  // Name: Fish, Legs: 0

  // Now, redo the steps in the previous one and 
  // take this data and add it to an array with nested objects. 
  // Your result should look like this:
  
     
  var results = [
  {Name: 'Fox', Legs: 4},
  {Name: 'Dog', Legs: 4},
  {Name: 'Frog', Legs: 4},
  {Name: 'Human', Legs: 2},
  {Name: 'Fish', Legs: 0}
  ];
  
  function resultFunc(array) {
    let newResults = [];
    for (let i = 0; i < data.results.length; i++) {
      let anmls = data.results[i].animal;
      let capAnmls = anmls[0].toUpperCase() + anmls.split('').splice(1).join('');
      let animalObj = {}
      animalObj["Name"] = capAnmls;
      animalObj["Legs"] = data.results[i].numberOfLegs;
      newResults.push(animalObj);
    }
    return newResults;
  }
  
  let animalResults = resultFunc(data);
 
console.log('results', animalResults);
  

// a function that checks to see if an animal is in the results.  
  
function isAnimal(animal) {  
  let animalLower = animal.toLowerCase();
  for (let i = 0; i < animalResults.length; i++) {
    let animalArray = animalResults[i]['Name'].toLowerCase().split(' ');
    if (animalArray.includes(animalLower)) return true;
  }
  return false;
}

// console.log(isAnimal('Dog'))


  // For another search result, console.log the animals whose matches are 'fish'
  // Next, add it to an array called 'FishMatches'. 
  // Make each match an object with two properties 'name' and 'index'
  // Your end result should look like this:
  var fishMatches = [{name: 'dog', index: 2}, {name: 'whale', index:5}];


  let fishMatch = [];
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].matches.includes('fish')) {
      // fishMatch.push(data.results[i].animal);
      let fishObj = {
        name: data.results[i].animal,
        index: i
      };
      fishMatch.push(fishObj)
    }
  }
  
console.log('fish match') 
console.log(fishMatch)
  /**
   * loop though the results and find matches if a name doesn't exist for the animal return an array of names
   * I: an animal and a array
   * O: all animals that don't match the fish
   */
   
  function nonMatch(animal) {
    let nonMatchAnimal = [];
    for (let i = 0; i < data.results.length; i++) {
      if (!data.results[i].matches.includes(animal) && data.results[i].animal !== animal) {
        let animalObj = {
          name: data.results[i].animal,
          index: i
        }
        nonMatchAnimal.push(animalObj);
      }
    }
    return nonMatchAnimal;
  }
  console.log('non fish match')
  console.log(nonMatch('fish'))
  
  
  
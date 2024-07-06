// animalController.js
const { nanoid } = require("nanoid"); //imports nanoid: This is imported from the nanoid package. It generates unique, URL-safe IDs. nanoid(4) generates a random ID of length 4 characters.
const animalPointsJSON = require("../data/animalPoints.json") // This imports a JSON file (animalPoints.json) which presumably contains point values for various animal names.

const inform = console.log; //const inform = console.log;: This creates an alias inform for console.log. It simplifies logging messages to the console throughout the script.


// Adds a new animal object to the animals array.
function create(animals, animalName) { 
    const animal = { //Creates a new animal object with properties: 
      name: animalName,  //name: Set to animalName, the parameter passed to the function. 
      id: nanoid(4), //id: Generated using nanoid(4), providing a unique ID for the animal. 
      points: animalPointsJSON[animalName],  //points: Retrieves the points for the animal from animalPoints JSON using animalPoints[animalName].  
    };
    animals.push(animal); //Pushes the animal object into the animals array.
    return animals;  //Returns the updated animals array.
  }


//Formats the list of animals for display.
function index(animals) {  //Uses the map() function to iterate over each animal in the animals array.
    return animals.map((animal) => animal.id + " " + animal.name).join("\n"); //Formats each animal to display id followed by name.
  } //Uses join("\n") to concatenate each formatted animal into a string separated by new lines (\n).
//Returns the formatted string containing all animals in the animals array.


//Purpose: Retrieves details of a specific animal based on its animalId.
function show(animals, animalId) {
    const animal = animals.find((animal) => animal.id === animalId); //Uses the find() function to search for an animal in the animals array where animal.id matches animalId.
    return animal.id + " " + animal.name + " " + animal.points + " points"; //Once found, constructs a string containing id, name, and points of the animal.
  } //Returns the constructed string.


//Purpose: Removes an animal from the animals array based on its animalId.
function destroy(animals, animalId) {
  const index = animals.findIndex((animal) => animal.id === animalId); //Uses findIndex() to find the index of the animal with matching animalId in the animals array.
  if (index > -1) {  //If index is greater than -1 (i.e., the animal is found):
    animals.splice(index, 1);  //Removes the animal from animals array using splice(index, 1).
    inform("Animal successfully removed from collection");  //Logs a success message using inform.
    return animals;

  } else { //If index is -1 (i.e., the animal is not found)
    inform("Animal not found. No action taken"); //Logs a message indicating that the animal was not found.
    return animals;  //Returns the updated animals array.

  }
}


//Purpose: Updates details of an existing animal in the animals array based on its animalId.
function edit(animals, animalId, updatedAnimal) {
  const index = animals.findIndex((animal) => animal.id === animalId); //Uses findIndex() to find the index of the animal with matching animalId in the animals array.
  if (index > -1) {  //If index is greater than -1 (i.e., the animal is found):
    animals[index].id = animalId; //Updates the id (though typically IDs shouldn't change), name, and points of the animal at index in animals.
    animals[index].name = updatedAnimal;  //updatedAnimal parameter is used to update the name.
    animals[index].points = animalPoints[updatedAnimal];  //Updates points using animalPoints[updatedAnimal] to get the points for the updated animal name.
    inform("Animal successfully updated"); //Logs a success message using inform.
    return animals;

  } else {  //If index is -1 (i.e., the animal is not found):
    inform("Animal not found. No action taken");  //Logs a message indicating that the animal was not found.
    return animals;  //Returns the updated animals array.
  }
}


//Purpose: Exports all functions (create, destroy, edit, index, show) from this module (animalController.js) for use in other modules.
module.exports = { create, index, show, destroy, edit };

//Summary
//The provided code implements basic CRUD (Create, Read, Update, Delete) operations for managing a list of animals. It uses nanoid for generating unique IDs, animalPoints.json for defining points associated with each animal, and console.log alias inform for logging messages. Each function (create, index, show, destroy, edit) performs specific operations related to managing animal data within an array (animals). These functions are then exported for use in other parts of an application.

/*
// animalController.js
const { nanoid } = require("nanoid"); //imports nanoid: This is imported from the nanoid package. It generates unique, URL-safe IDs. nanoid(4) generates a random ID of length 4 characters.
const animalPointsJSON = require("../data/animalPoints.json")
const inform = console.log;

function create(animals, animalName) {
    const animal = {
      name: animalName,
      id: nanoid(4),
      points: animalPointsJSON[animalName],
    };
    animals.push(animal);
    return animals;
  }


function index(animals) {
    return animals.map((animal) => animal.id + " " + animal.name).join("\n");
  }


function show(animals, animalId) {
    const animal = animals.find((animal) => animal.id === animalId);
    return animal.id + " " + animal.name + " " + animal.points + " points";
  }


function destroy(animals, animalId) {
  const index = animals.findIndex((animal) => animal.id === animalId);
  if (index > -1) {
    animals.splice(index, 1);
    inform("Animal successfully removed from collection");
    return animals;
  } else {
    inform("Animal not found. No action taken");
    return animals;
  }
}


function edit(animals, animalId, updatedAnimal) {
  const index = animals.findIndex((animal) => animal.id === animalId);
  if (index > -1) {
    animals[index].id = animalId;
    animals[index].name = updatedAnimal;
    animals[index].points = animalPoints[updatedAnimal];
    inform("Animal successfully updated");
    return animals;
  } else {
    inform("Animal not found. No action taken");
    return animals;
  }
}

module.exports = { create, index, show, destroy, edit };



*/
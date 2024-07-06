// give console.log an alias
// When providing user feedback use `inform`
// When developing/debugging use `console.log`
const { readJSONFile, writeJSONFile } = require("./src/helpers") // readJSONFile and writeJSONFile are imported modules from helpers.js. These functions are used to read from and write to JSON files.
const { create, index, show, destroy, edit } = require("./src/animalController.js"); //create, destroy, edit, index, and show are functions imported from animalController.js. These functions handle CRUD operations (Create, Read, Update, Delete) for animals in the application.

const inform = console.log; //inform is declared as an alias for console.log. This alias is used throughout the script to output messages to the console. It's intended to differentiate between messages intended for user feedback (inform) and messages used for debugging (console.log).


function run() {

  //Initializations
    let animals = readJSONFile("data", "animals.json"); //animals: Reads the JSON file animals.json from the data directory using the readJSONFile function. //It starts by reading the current list of animals from the animals.json file using readJSONFile.

    let writeToFile = false; //writeToFile: Flag indicating whether changes were made that require writing to animals.json. //It initializes variables writeToFile (to determine if changes need to be written back to file) and updatedAnimals (to store modified animal data).

    let updatedAnimals = []; // Array to store animals after operations like create, edit, or destroy.

  //Command-Line Arguments: 
  //action and animal are extracted from process.argv which represents command-line arguments.
  const action = process.argv[2]; //action: Command (e.g., index, create, show, update, destroy, score).
  const animal = process.argv[3]; //animal: Argument passed along with the command (e.g., animal name or ID).

  //Switch Statement:
  //to determine which action to perform based on the action:
  switch (action) {  //Executes different blocks of code based on the value of action.
    case "index":  //Calls index function from animalController.js to retrieve and display all animals. //"index": Calls index(animals) to get a formatted list of animals and logs it using inform.
        const animalsView = index(animals);
        inform(animalsView);
        break;

    case "create": //Calls create function to add a new animal to animals array and sets writeToFile to true for saving changes. //"create": Calls create(animals, animal) to add a new animal to the list and sets writeToFile to true.
        updatedAnimals = create(animals, animal);
        writeToFile = true;
        break;

    case "show":  //Calls show function to display details of a specific animal identified by animal.  //"show": Calls show(animals, animal) to display details of a specific animal and logs it using inform.
      const animalView = show(animals, animal);
      inform(animalView);
      break;

    case "update": //Calls edit function to update an existing animal identified by animal with a new name provided in process.argv[4]. //"update": Calls edit(animals, animal, process.argv[4]) to update an animal's details and sets writeToFile to true.
      updatedAnimals = edit(animals, animal, process.argv[4]);
      writeToFile = true;
      break;

    case "destroy": //Calls destroy function to remove an animal identified by animal and sets writeToFile to true for saving changes. //"destroy": Calls destroy(animals, animal) to remove an animal from the list and sets writeToFile to true.
        updatedAnimals = destroy(animals, animal);
        writeToFile = true;
        break;

    case "score": //Calculates the total score of all animals based on their points and logs it using inform. //"score": Calculates the total score based on points of all animals using reduce and logs it using inform.
      const score = animals.reduce((acc, current) => acc + current.points, 0);
      inform("Current score", score);
      break;

    default:  //Logs an error message if the command (action) is unrecognized. //default: Logs an error message if an invalid action is provided.
      inform("There was an error.");
  }
  if (writeToFile) {  //If writeToFile is true (set in create, update, or destroy cases), it updates animals.json with updatedAnimals using writeJSONFile function.

    writeJSONFile("./data", "animals.json", updatedAnimals);  //if writeToFile is true, it writes the updated list of animals (updatedAnimals) back to the animals.json file using writeJSONFile.
  }
}
run(); //Invokes the run function at the end to start the application.


//Summary:
//This script serves as the core of a command-line application for managing a list of animals. It leverages command-line arguments to determine actions, utilizes functions from animalController.js for CRUD operations, and interacts with JSON files (animals.json) for data storage. The inform alias for console.log is used throughout to provide user feedback or debugging information based on the context.


// give console.log an alias
// When providing user feedback use `inform`
// When developing/debugging use `console.log`

/*
const { readJSONFile, writeJSONFile } = require("./src/helpers")
const { create, index, show, destroy, edit } = require("./src/animalController.js");
const inform = console.log;

function run() {
    let animals = readJSONFile("data", "animals.json");
    let writeToFile = false;
    let updatedAnimals = [];
  const action = process.argv[2];
  const animal = process.argv[3];
  switch (action) {
    case "index":
        const animalsView = index(animals);
        inform(animalsView);
        break;
    case "create":
        updatedAnimals = create(animals, animal);
        writeToFile = true;
        break;
    case "show":
      const animalView = show(animals, animal);
      inform(animalView);
      break;
    case "update":
      updatedAnimals = edit(animals, animal, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
        updatedAnimals = destroy(animals, animal);
        writeToFile = true;
        break;
    case "score":
      const score = animals.reduce((acc, current) => acc + current.points, 0);
      inform("Current score", score);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("./data", "animals.json", updatedAnimals);
  }
}
run();

*/
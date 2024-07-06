// Importing necessary file system functions from the Node.js 'fs' module
const { readFileSync, writeFileSync } = require("node:fs");  //Imports the readFileSync and writeFileSync functions from Node.js's fs (file system) module. These functions are used for synchronously reading from and writing to files.


// Function to read a JSON file from specified path and filename
function readJSONFile(path, fileName) {  //It uses readFileSync to read the file synchronously and stores its contents in collection.
  // Reads the file content as a string
  const collection = readFileSync(`${path}/${fileName}`, "utf8");  //It uses readFileSync to read the file synchronously and stores its contents in collection.
  
  // Parses the JSON content if collection is not empty, otherwise returns an empty array
  return collection ? JSON.parse(collection) : [];  //If collection has content (i.e., the file was read successfully), it parses the JSON string into a JavaScript object using JSON.parse.
}  //If the file is empty or cannot be parsed, it returns an empty array ([]).

// Function to write JSON data to a specified path and filename
function writeJSONFile(path, fileName, data) {  //writeJSONFile writes data to a JSON file specified by path and fileName.
  // Converts data object to JSON string
  data = JSON.stringify(data);  //It first converts the data object into a JSON-formatted string using JSON.stringify.
  
  // Writes the JSON data to the specified file with UTF-8 encoding
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });  //Then, it uses writeFileSync to write the JSON string to the file specified by ${path}/${fileName}.
}//{ encoding: "utf-8" } specifies that the file should be written using UTF-8 encoding.

// Exporting the readJSONFile and writeJSONFile functions for use in other modules
module.exports = {  //module.exports is used to export the readJSONFile and writeJSONFile functions from this module. //By exporting these functions, other modules (such as index.js or animalController.js) can import and use them to read from and write to JSON files.  
  readJSONFile,
  writeJSONFile,
};


/*
const { readFileSync, writeFileSync } = require("node:fs");

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? JSON.parse(collection) : [];
}

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = {
  readJSONFile,
  writeJSONFile,
};


*/
// TODO: Include packages needed for this application
// Theres going to be three packages for this application
const fs = require("fs"); // For reading and writing capabilities.
const inquirer = require("inquirer"); // To use the tool for prompting the user
const generateMarkdown = require("./utils/generateMarkdown.js") //For our local modules so that we get access to functions

// TODO: Create an array of questions for user input
const questions = [
    // We want to ask for the Title of project, Descrition, ToC, Installation, Usage,  
    // License, Contributing, Tests, and Questions
    // Title
    {
        // When prompting the user for input, type input of string is the default
        type: "input",
        name: "title",
        message: "What is the 'Name' of your project: "
    },
    // Description
    {
        // since this is the default, lets not include it anymore
        name: "desctiption",
        message: "What is the 'Description' of your project: "

    },
    // We want to create the table of contents on our end so lets skip over that for now
    // Installation
    {
        name: "installation",
        message: "Plese enter how we are going to install the project: "
    }, 
    // Usage
    {
        name: "usage",
        message: "Please describe the usage of the project: "
    },
    // License
    {
        // Because we want the user to choose a lisence, we need to have a different input that allows one choice
        type: 'list',
        // Now we need to provide the choices to pick from (for this use top 5)
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause"],
        name: "license",
        message: "What license do you want to include in your project: "
    },
    // Contributing
    {
        name: "contributing",
        message: "Please enter how one can help contribute to the project: "
    },
    // Tests
    {
        name: "tests",
        message: "Please enter the testing process of your project: "
    },
    // for questions, we are going to ask for your github
    {
        name: "github",
        message: "Enter your GitHub username: "
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data) , (err) => {
        err ? console.error(err) : console.log("Sucess!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then((response) => {
                // for file name, lets create a variable initialize a README.md file
                const fileName = "README.md";
                // Now lets write to the file passing in the responses to the questions
                //console.log(response.github);
                writeToFile(fileName, response);
            })

}

// Function call to initialize app
init();

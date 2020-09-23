const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdown = require('./generateMarkdown');
const generateMarkdown = require('./generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
function promptUser() {
    return inquirer.prompt([{
            type: 'input',
            message: 'What is the title of your project? :',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description of your Project. :',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions. :',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Enter usage information. : ',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines. :',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Enter test instructions. :',
            name: 'testInstructions'
        },
        {
            type: 'checkbox',
            message: 'Select a license. :',
            choices: [
                "None",
                "1",
                "2"
            ],
            name: 'license'
        }

    ]);
}

// function to write README file
// function writeToFile(fileName, data) {

// }

// function to initialize program
async function init() {
    try {
        const answers = await promptUser();

        const readMeFile = generateMarkdown(answers);

        await writeFileAsync('readme.md', readMeFile);

        console.log('Successfully created your readme.md file!');

    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
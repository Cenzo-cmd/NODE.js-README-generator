const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
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
            message: 'Enter your name. :',
            name: 'creator'
        }, {
            type: 'input',
            message: 'Enter your github user name. :',
            name: 'github'
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
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Enter test instructions. :',
            name: 'test'
        },
        {
            type: 'list',
            message: 'Select a license. :',
            choices: [
                "Apache License 2.0",
                "MIT License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense"
            ],
            name: 'license'
        }

    ]);
}

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
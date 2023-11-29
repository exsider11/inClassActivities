const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt([
    {
    name: 'name',
    message: 'what is your name?',
    type: 'input'
},
{
    name: 'language',
    message: 'How many languages do you know?',
    type: 'input'
},
{
    name: 'prefLanguage',
    message: 'What is your preferred method of communication?',
    type: 'input'
}])
.then(function(answer){
    var logs = JSON.stringify(answer.name,answer.language,answer.prefLanguage)
    fs.appendFile('log.txt', `${answer.name}\n`, (err) => 
    err ? console.error(err) : console.log('Commit logged!')
  );
    fs.appendFile('log.txt', `${answer.language}\n`, (err) => 
    err ? console.error(err) : console.log('Commit logged!') 
);
    fs.appendFile('log.txt', `${answer.prefLanguage}\n`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
);
});
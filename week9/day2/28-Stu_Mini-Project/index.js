const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt([
    {
    name: 'name',
    message: 'what is your name?',
    type: 'input'
},
{
    name: 'location',
    message: 'Where do you live?',
    type: 'input'
},
{
    name: 'bio',
    message: 'where are you from?',
    type: 'input'
},
{
    name: 'linkedin',
    message: 'what is your linkedin?',
    type: 'input'
},
{
    name: 'github',
    message: 'what is your github?',
    type: 'input'
}])

.then(function(answer){
    fs.writeFile('userinformation.html', 
    `<!DOCTYPE html>
    <html lang="en">
      
    <head>
      <meta charset="UTF-8" />
      <title>Group Project</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
        <div>${answer.name}</div>
        <div>${answer.location}</div>
        <div>${answer.bio}</div>
        <div>${answer.linkedin}</div>
        <div>${answer.github}</div>
    </body>
    
    </html>`,
    (err) => err ? console.error(err) : console.log('commit logged.')
  );
  fs.open('userinformation.html', 'w+', function (err, f) {
  if (err) {
      return console.error(err);
  }
});
})


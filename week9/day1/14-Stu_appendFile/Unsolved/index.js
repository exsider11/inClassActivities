// TODO: What are we importing?
const fs = require('fs'); // node js file server

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) => // append text from input in console to 'log.txt
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!') // if error logs error, else console.log commit logged
);

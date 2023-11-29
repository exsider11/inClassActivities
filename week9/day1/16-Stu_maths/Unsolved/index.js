// TODO: Import `maths.js`
const maths=require("./maths.js");
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = parseInt(process.argv[3]); //using parse int to change strings into ints cause strings wont add properly
const numTwo = parseInt(process.argv[4]);

switch(operation){
    case 'add':
        console.log(maths.sum(numOne, numTwo))
    break;
    case 'difference':
        console.log(maths.difference(numOne, numTwo))
    break;
    case 'product':
        console.log(maths.product(numOne, numTwo))
    break;
    case 'quotient':
        console.log(maths.quotient(numOne, numTwo))
    break;
    default:
        console.log("you didnt put a right case");
        break;
}
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

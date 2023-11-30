// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    const myArray = str.split(" ");
    const length = myArray.length
    for( i = 0 ; i < length ; i++){        
        const firstLetter = myArray[i].charAt(0);
        const remainingLetters= myArray[i].substring(1);
        const firstLetterCap = firstLetter.toUpperCase();
        const finishedWord = firstLetterCap + remainingLetters;
        myArray[i] = finishedWord;
    }
    const firstFirstLetter = myArray[0].charAt(0);
    const firstRemainingLetters= myArray[0].substring(1);
    const firstFirstLetterCap = firstFirstLetter.toLowerCase();
    const firstFinishedWord = firstFirstLetterCap + firstRemainingLetters;
    myArray[0] = firstFinishedWord;
    return myArray.join('');
};
var str = "The rain in spain falls mainly on the plain";
console.log(camelCase(str));
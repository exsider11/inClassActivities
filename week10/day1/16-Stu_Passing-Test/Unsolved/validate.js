class Validate {}

Validate.prototype.isPassword = (password) => {
  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  var passLength = password.length
  if(passLength > 8){
    return false;
  }
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
  const passContent = password.split;
  const passContentLength = passContent.length
  var uppercases = 0;
  const upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercases = 0;
  const lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbers = 0;
  const normalNumbers = ['1','2','3','4','5','6','7','8','9','0']
  for(i = 0; i < passContentLength ; i ++){
    for(b = 0; b < upperCaseAlphabet.length; b++){
      if(passContent[i] === upperCaseAlphabet[b]){
        uppercases++;
      }
      if(passContent[i] === lowerCaseAlphabet[b]){
        lowercases++;
      }
    }
    for(n = 0; n < 9; n++){
      if(passContent[i] === normalNumbers[n]){
        numbers++
      }
    }
  }
  if(uppercases == 0 || lowercases == 0 || numbers == 0){
    return false;
  }
  if(uppercases > 0 || lowercases > 0|| numbers > 0){
    return true;
  }
};

module.exports = Validate;

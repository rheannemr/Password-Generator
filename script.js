// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters for generated password
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var passwordLength = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128 characters"));
  if (passwordLength < 8) {
    alert("Your password must be 8 or more characters")
  } else if (passwordLength > 128) {
    alert("Your password cannot be more than 128 characters")
  }

  var password = "";
  var charPool = "";

  var includeAlphaLower = confirm("Would you like your password to include lowercase letters?");
  if (includeAlphaLower) {
    charPool = charPool.concat(alphaLower);
  }

  var includeAlphaUpper = confirm("Would you like your password to include uppercase letters?");
  if (includeAlphaUpper) {
    charPool = charPool.concat(alphaUpper);
  }

  var includeSpecialChar = confirm("Would you like your password to include special characters?");
  if (includeSpecialChar) {
    charPool = charPool.concat(specialChar);
  }

  var includeNum = confirm("Would you like your password to include numbers?");
  if (includeNum) {
    charPool = charPool.concat(num);
  }

  for (let i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * charPool.length);
    password = password + charPool[randomNum];
  }

  return password;

}


// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters for generated password
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password
function generatePassword() {

  var password = "";
  var charPool = [];
  
// Prompt user to input password length
var passwordLength = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128 characters"));
if (passwordLength < 8) {
  alert("Your password must be 8 or more characters")
} else if (passwordLength > 128) {
  alert("Your password cannot be more than 128 characters")
}
// Asks if user wants lowercase letters in password
  var includeAlphaLower = confirm("Would you like your password to include lowercase letters?");
  if (includeAlphaLower === true) {
    charPool = charPool.concat(alphaLower);
  }
// Asks if user wants uppercase letters in password
  var includeAlphaUpper = confirm("Would you like your password to include uppercase letters?");
  if (includeAlphaUpper === true) {
    charPool = charPool.concat(alphaUpper);
  }
// Asks if user wants special characters in password
  var includeSpecialChar = confirm("Would you like your password to include special characters?");
  if (includeSpecialChar === true) {
    charPool = charPool.concat(specialChar);
  }
// Asks if user wants numbers in password
  var includeNum = confirm("Would you like your password to include numbers?");
  if (includeNum === true) {
    charPool = charPool.concat(num);
  }

  for (let i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * charPool.length);
    password = password + charPool[randomNum];
  }

  return password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");

var enterNumberChar;
var lowercase;
var uppercase;
var number;
var specialChar;

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
specialcharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {

if (enterNumberChar !== null) {
  enterNumberChar = parseInt(prompt("How many characters would you like your password to be? Choose between 8 to 128"));
}
  lowercase = confirm("Would you like lowercase letters in your password?");
  
  uppercase = confirm("Would you like uppercase letters in your password?");
  
  number = confirm("Would you like numbers in your password?");
  
  specialChar = confirm("Would you like special characters in your password?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

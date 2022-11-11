# Caltrops
// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["1234567890"];
var lowercases = ["abcdefghijklmnopqrstuvwxyz"];
var uppercases = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var symbols = ["!@#$^&*()_+"];



// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// pop up window for Prompts
function generatePassword() {
prompt("Please enter the number of characters you want for you new password.  It must be more than 7 but less than 128.");

confirm("Do you want numbers in your password?");

confirm("Do you want lowercases in your password?");

confirm("Do you want uppercases in your password?");

confirm("Do you want special characters in your password?");
  // pop up windows for prompts
}

if (userSelection.length ===0)   return;
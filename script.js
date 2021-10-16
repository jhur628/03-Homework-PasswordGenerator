// Assignment Code
var generateBtn = document.querySelector("#generate");

// make a variable for the lower case letters in a string
var lowerSet = "abcdefghijklmnopqrstuvwxyz"
// make a varaiable for upper case letters, utilizing .toUpperCase()
var upperSet = lowerSet.toUpperCase()
// make a variable of number 1-9 in a string
var numberSet = "0123456789"
// make a variable for special characters in a string
var specialSet = "!@#$%^&*()_-+=,./<>?"
// create a variable that is a bank that will add confirmed sets into the bank
var charBank = ""
// create a variable that will contain the random password
var pw = ""

function generatePassword() { 
  // create a variable for the length of the password that is determined by a prompt
  var charTotal = prompt("How many characters do you want in your password? (8-128)")
  // if characters are lower than 8 or higher than 128, then return with "pick between 8-128"
  if (charTotal < 8 || charTotal > 128) {
    return "Please pick a number between 8 and 128."
  } 
  // after first prompt reset charBank and pw, so user can use password generator more than once
  else {
    charBank = "";
    pw = "";
  }

  // have a pop out confirming if user wants to use lower case characters in their password
  var lowerChar = confirm("Do you want lower case characters in your password?")
  // if lowerChar is true, then add lowerSet characters to the charBank
  if (lowerChar) {
    charBank = charBank.concat(lowerSet)
  }

  // ask if user wants to have upper case characters in their password
  var upperChar = confirm("Do you want upper case characters in your password?")   
  // if upperChar is true, then add upperSet to the charBank
  if (upperChar) {
    charBank = charBank.concat(upperSet)
  }

  // ask if user wants to add numbers in their password
  var numberChar = confirm("Do you want numbers in your password?")
  // if numberChar is true, then add numberSet to charBank
  if (numberChar) {
    charBank = charBank.concat(numberSet)
  }

  // ask if user wants to add special characters in their password
  var specialChar = confirm("Do you want special characters in your password?")
  // if specialChar is true, then add specialSet to charBank
  if (specialChar) {
    charBank = charBank.concat(specialSet);
  }

  // create a function that uses charBank to pick random characters to add to password
  function randomizer(length) {
      for (var i = 0; i < length; i++) {
        pw += charBank.charAt(Math.floor(Math.random() * charBank.length - 1));
      } 
      return pw;
  }

  // run function to give random password
  randomizer(charTotal);

  // return pw to show password in box
  return pw;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Let's play a gave of Rock, Paper and Scissors

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var responseResult = "";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getUserResponse(userResponse) {

   var userResp = prompt("Enter one of either R, S or P to play ...");
   responseResult = userResp.toLowerCase();
   // alert("You entered " + responseResult);

   if (responseResult === "r" || responseResult === "s" || responseResult == "p") {
      console.log(responseResult + " is a good entry is ok");
   } else {
      alert("You did not enter an R, S, or P. Please try again");
      getUserResponse();
   }
}

getUserResponse();
// console.log(responseResult);


// Required to have minimum 8 characters. WE can ask for at least that and if they provide 7, just make it default to 8
// ask about uppercase
// ask about lowercase
// ask about special characters
// ask about numbers
// after selections, the generator will crunch them all together in some random order picking some from here and some from tehre.
//    If all numbers, or if all of one  type, this should be straight forward to use a random generator to go the a list of that type and pull a character
//    If there is a mix of two types or three, the generator will generate through which one to use, then go through that type and pull a character
//    When all characters are generated the meets the length required, exit this function and ...
// generator will spit out the password in the box.
// you have the option to continue doing this process

// Create a random function that accepts typd and index required to generate a character. 
//    ... can it be generic and used by lowercase, uppercase, number and special characters?

// Create a function to ask for size of password
// Create a function to ask about upper, and then lower, and then special, and then numbers

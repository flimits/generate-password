// Let's play a gave of Rock, Paper and Scissors

var numbers = [0123456789];
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var searchList = "";
var thePasswordIs = "";

// // // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function getUserResponse() {

   var userResp = prompt("What is the size of the password you wish to create?\nIt must be between 8 and 128 characters in length:");
   // responseResult = userResp.toLowerCase();
   console.log("You entered " + userResp);

   if (userResp >= 8 && userResp <= 128) {
      console.log(userResp + " is an ok size of password");
      return userResp;
   } else {
      alert("You entered " + userResp + ". The password length should\nbe between 8 and 128 characters in lengh.\nPlease try again");
      getUserResponse();
   }
}

var userResponse = getUserResponse();
console.log("the user response to how many characters the password is " + userResponse)

function askFourQuestions() {


   let upperCaseResponse = confirm("Do you want UPPER case letters in your password?");
   if (upperCaseResponse) {
   searchList = searchList.concat(upperCaseLetters);
   console.log("The outoput is" + searchList);

   }
   // var upperCase = uC.toLocaleLowerCase();
   // console.log(upperCase);
   let lowerCase = confirm("Do you want lower case letters in your password?");
   if (lowerCase) {
      searchList = searchList.concat(lowerCaseLetters);
      console.log("The outoput is" + searchList);

   }
   // // var lowerCase = lC.toLocaleLowerCase();
   // console.log(lowerCase);
   // let specialCase = confirm("Do you want special characters in you password?");
   // // var specialCase = sC.toLocaleLowerCase();
   // console.log(specialCase);
   // let numberChoice = confirm("Do you want numbers in your password?");
   // // var numberChoice = nC.toLocaleLowerCase();
   // console.log(numberChoice)


}

askFourQuestions();

function generateRandom(valueToUse) {
      var newValue = Math.floor(Math.random() * valueToUse);
      // console.log("newvalue is " + newValue)
      return newValue;
}

function getUpperCase(){
var getBack = generateRandom(upperCaseLetters.length);
var upperCaseValue = upperCaseLetters[getBack];
// console.log(upperCaseValue)
return upperCaseValue;
}

for (let i = 0; i < userResponse; i++) {
var myUcValue = getUpperCase();
thePasswordIs.push(myUcValue);
   // console.log("the userresponse is " + userResponse);
   console.log("The uppercase value is " + myUcValue);
   console.log("The Password Is Value " + thePasswordIs);
 }

// removing character 'e'
var newStr = thePasswordIs.toString();
var password = newStr.replace(/,/g,'');
console.log("the new string for passwords is " + newStr);
console.log("the cleaned up version string for passwords is " + password);




// // // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);






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

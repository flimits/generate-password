// Let's play a gave of Rock, Paper and Scissors

var playerScores = [, ,]; // wins and losses and ties
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allowedCharacters = ["r", "s", "p"];
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var responseResult = "";

// function getUserResponse() {
// var userResponse = prompt("Enter one of either R, S or P to play ...");
// var lowerCaseResponse = userResponse.tolowerCase();

function getUserResponse(userResponse) {

   var userResp = prompt("Enter one of either R, S or P to play ...");
   responseResult = userResp.toLowerCase();
   alert("You entered " + responseResult);

   if (responseResult === "r" || responseResult === "s" || responseResult == "p") {
      alert("Your entry is ok");
      // return userResponse;
   } else {
      alert("You did not enter an R, S, or P. Please try again");
      getUserResponse();
   }
}

getUserResponse();
console.log(responseResult);
// Assignment Code
generateBtn = document.querySelector("#generate");
var total = {
numbers: [1,2,3,4,5,6,7,8,9,0],
characters: ["!","@","#","$","%","^","&","*","(",")","-","_","+","="],
lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z","Y"],
 }

 let opening = prompt("select a number of characters","less than 128 and more than 8 please");

 stepsmessage = function () {
  window.confirm ("would you like characters in your password?")
 }

secondstepmessage = function () {
  window.confirm ("would you like numbers in your password?")
}

thirdstepmessage = function () {
  window.confirm ("would you like uppercase letters in your password?")
}

finalstepmessage = function () {
  window.confirm ("would you like lowercase letters in your password?")
}

if (opening <= 8 && opening < 129 ) {
  window.alert ("incorrect number please refresh page");
} else if (opening >= 8 && opening < 129) {
    stepsmessage();
}

if (stepsmessage == true ) {
      secondstepmessage();
}





function CharacterSelection() {
var charChar = window.confirm ("test")
}


















function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    document.getElementById("generate") = prompt("how many characters would you like your password to be?")
    console.log ("test")

    generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //function begins when 'click'

//var element values
var choiceArr = [];
var passwordLength = 8;
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "?"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var emojiArr = ["👆", "🫠", "😘", "😁", "👌", "😍", "🤣", "😂", "💕"];

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
  //passwordText.value = password;
}
function generatePassword() {
  var password = "";
  for (var i = 0; i < charecterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

//will promt the question bellow which will determin the start of our password

function getPrompts() {
  choiceArr = [];
  charecterLength = parseInt(
    prompt(
      "How many charecters long do you want your password to be, between 8-128?"
    )
  );
  if (charecterLength < 8 || charecterLength > 128 || isNaN(charecterLength)) {
    //isNaN=is not a number
    alert("Charecter length has to be a number between 8-128.");
    return false; //so if the resonse is less then 8, greater then 128, or if its is not a number(isNaN) will return false
  }
  if (
    confirm("Would you care to include lowercase letters in your password?")
  ) {
    choiceArr = choiceArr.concat(lowerArr);
  }
  if (
    confirm("Would you care to include upper case letters in your password?")
  ) {
    choiceArr = choiceArr.concat(upperArr);
  }
  if (confirm("Would you care to include numeric values in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (
    confirm("Would you care to include special charecters in your password?")
  ) {
    choiceArr = choiceArr.concat(specialArr);
  }
  if (confirm("Would you care to include emojis in your password?")) {
    choiceArr = choiceArr.concat(emojiArr);
  }
  return true;

  //Prompts("Would you care to include lowercase letters in your password?");
  //Prompts("Would you care to include upper case letters in your password?");
  //Prompts("Would you care to include numeric values in your password?");
  //Prompts("Would you care to include special charecters in your password?");
  //Prompts("Would you care to include emojis in your password?");
}

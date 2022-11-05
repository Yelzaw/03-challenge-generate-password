// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  const objUserchoice ={};   
  // Reminder for user about require to answer the questions.
  window.alert("Please answer the questions for password criteria to generate the password.")
  var pwdLength = window.prompt("What is the length of password you would prefer? Please choose between 8 to 256.");
    
  var lwrLetter="";
  var uppLetter="";
  var numLetter="";
  var specialLetter="";

  if (pwdLength >= 8 && pwdLength <= 256) {
    var lwrCase = window.confirm("Do you want lowercase letter in your password?");
    if (lwrCase == true) {
        objUserchoice.lwrLetter="abcdefghijklmnopqrstuvwxyz";            
    };
    var uppCase = window.confirm("Do you want uppercase letter in your password?");
    if (uppCase == true) {
        objUserchoice.uppLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    var number = window.confirm("Do you want number in your password?");
    if (number== true) {
        objUserchoice.numLetter ="0123456789";
    };
    var special = window.confirm("Do you want special character in your password?");
    if (special == true) {
        objUserchoice.specialLetter = "!#$%&'()*+,-./:;<=>?@]\[^_`{|}~";
    };
    var arrayUserchoice = (Object.values(objUserchoice));
  }    
  var saveLast = pwdLength - 4;
  var countItem = Object.keys(objUserchoice).length;
  var percentChars = [];
  var chooseChars ="";
  // If user selected All Characters for password (Lower,Upper,Number & Special), generate random leter from all characters
  if (countItem==4) {
    percentChars[0] = (1+Math.floor((Math.random() * (saveLast))));
    percentChars[1] = (1+Math.floor((Math.random() * (saveLast+1-percentChars[0]))));
    percentChars[2] = (1+Math.floor((Math.random() * (saveLast+2-percentChars[1]-percentChars[0]))));
    percentChars[3] = (pwdLength - percentChars[2] - percentChars[1]-percentChars[0]);

    for (var i = 0; i < percentChars[0]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[0].length);
        chooseChars += arrayUserchoice[0].substring(randomNumber, randomNumber +1);
    };
    for (var i = 0; i < percentChars[1]; i++) {
    var randomNumber = Math.floor(Math.random() * arrayUserchoice[1].length);
    chooseChars += arrayUserchoice[1].substring(randomNumber, randomNumber +1);
    };
    for (var i = 0; i < percentChars[2]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[2].length);
        chooseChars += arrayUserchoice[2].substring(randomNumber, randomNumber +1);
    };
    for (var i = 0; i < percentChars[3]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[3].length);
        chooseChars += arrayUserchoice[3].substring(randomNumber, randomNumber +1);
    };
  }    
  // If user selected 3 out 4 Characters for password, generate random leter from only this 3 characters
  else if (countItem==3) {
    percentChars[0] = (1+Math.floor((Math.random() * (saveLast))));
    percentChars[1] = (1+Math.floor((Math.random() * (saveLast+1-percentChars[0]))));        
    percentChars[2] = (pwdLength - percentChars[1]-percentChars[0]);
    for (var i = 0; i < percentChars[0]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[0].length);
        chooseChars += arrayUserchoice[0].substring(randomNumber, randomNumber +1);
      };
    for (var i = 0; i < percentChars[1]; i++) {
    var randomNumber = Math.floor(Math.random() * arrayUserchoice[1].length);
    chooseChars += arrayUserchoice[1].substring(randomNumber, randomNumber +1);
    };
    for (var i = 0; i < percentChars[2]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[2].length);
        chooseChars += arrayUserchoice[2].substring(randomNumber, randomNumber +1);
    };
  }
  // If user selected 2 out 4 Characters for password, generate random leter from only this 2 characters
  else if (countItem==2) {
    percentChars[0] = (1+Math.floor((Math.random() * (saveLast))));               
    percentChars[2] = (pwdLength - percentChars[0]);
    for (var i = 0; i < percentChars[0]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[0].length);
        chooseChars += arrayUserchoice[0].substring(randomNumber, randomNumber +1);
      };
    for (var i = 0; i < percentChars[1]; i++) {
    var randomNumber = Math.floor(Math.random() * arrayUserchoice[1].length);
    chooseChars += arrayUserchoice[1].substring(randomNumber, randomNumber +1);
    };
  }
    // If user selected 1 out 4 Characters for password, generate random leter from only this 1 characters
  else if(countItem==1) {
    percentChars[0] = (pwdLength); 
    for (var i = 0; i < percentChars[0]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[0].length);
        chooseChars += arrayUserchoice[0].substring(randomNumber, randomNumber +1);
    };
  }



  
  else window.alert ("The input value is not valid. Please try againg!");
  return(chooseChars);
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
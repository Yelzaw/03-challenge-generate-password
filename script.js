// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  const objUserchoice ={};   
  // Reminder for user about require to answer the questions and clarify on critieria to set password's rules
  window.alert("Please answer the questions for password criteria to generate the right password for you.")
  var pwdLength = window.prompt("What is the length of password you would prefer? Please choose between 8 to 256.");
    
  //Collect the set of criteria from user, and store all characters as object by category (array can be used directly to minize some codes) 
  if (pwdLength >= 8 && pwdLength <= 256) {
    var lwrCase = window.confirm("Do you want lowercase letters in your password?");
    if (lwrCase == true) {
        objUserchoice.lwrLetter="abcdefghijklmnopqrstuvwxyz";            
    };
    var uppCase = window.confirm("Do you want uppercase letters in your password?");
    if (uppCase == true) {
        objUserchoice.uppLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    var number = window.confirm("Do you want numbers in your password?");
    if (number== true) {
        objUserchoice.numLetter ="0123456789";
    };
    var special = window.confirm("Do you want special characters in your password?");
    if (special == true) {
        objUserchoice.specialLetter = "!#$%&'()*+,-./:;<=>?@]\[^_`{|}~"; 
    };
    var arrayUserchoice = (Object.values(objUserchoice)); // transferred values of object to array
  }    
  var saveLast = pwdLength - 4;
  var countItem = Object.keys(objUserchoice).length; //find out how many criteria were selected
  var percentChars = [];
  var chooseChars ="";

  //(All criteria) Based on users' choice, will find a random percentage first for each criteria and then will find random letters for each category to get a string for the initial password.
  if (countItem==4) { 
    // collects random percentage of each criteria and stored as array, adujsted in code to make sure to get at least 1 for each category
    percentChars[0] = (1+Math.floor((Math.random() * (saveLast))));
    percentChars[1] = (1+Math.floor((Math.random() * (saveLast+1-percentChars[0]))));
    percentChars[2] = (1+Math.floor((Math.random() * (saveLast+2-percentChars[1]-percentChars[0]))));
    percentChars[3] = (pwdLength - percentChars[2] - percentChars[1]-percentChars[0]);

    //based on percentage of each category, find random letters and store as string
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
  // If user selected 3 out 4 Criteria for password, generate random letters from only this 3 types
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
  // If user selected 2 Criterias, generate random letters from only 2
  else if (countItem==2) {
    percentChars[0] = (1+Math.floor((Math.random() * (saveLast))));               
    percentChars[1] = (pwdLength - percentChars[0]);
    for (var i = 0; i < percentChars[0]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[0].length);
        chooseChars += arrayUserchoice[0].substring(randomNumber, randomNumber +1);
      };
    for (var i = 0; i < percentChars[1]; i++) {
    var randomNumber = Math.floor(Math.random() * arrayUserchoice[1].length);
    chooseChars += arrayUserchoice[1].substring(randomNumber, randomNumber +1);
    };
  }
    // If user selected only 1 criteria, generate random letters from only one
  else if(countItem==1) {
    percentChars[0] = (pwdLength); 
    for (var i = 0; i < percentChars[0]; i++) {
        var randomNumber = Math.floor(Math.random() * arrayUserchoice[0].length);
        chooseChars += arrayUserchoice[0].substring(randomNumber, randomNumber +1);
    };
  }  
  else window.alert ("The input value is not valid. Please try againg!"); // If user have selcted password length out of 8 to 256, this will prompt to user.
// Shuffle function for initial password shuffle into random string and to be final password
function shuffledChars(n) {
  return Math.floor(Math.random() * n);
};

function shuffle(chooseChars) {
var arr = chooseChars.split(''); // Convert String to array
var n = arr.length;              // Length of the array

  for(var i=0 ; i<n-1 ; ++i) {
      var j = shuffledChars(n);    // Get random of [0, n-1]    
      var temp = arr[i];           // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
  }

chooseChars = arr.join('');      // Convert Array to string
return chooseChars;              // Return shuffled string
};

  finalPassword = shuffle(chooseChars);
  window.alert ("Your password is "+finalPassword);
  return(finalPassword);
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
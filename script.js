var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSymbol;



symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "*", "(", ")", "_", "+", "=", "-"];
number = [1, 2, 3, 4, 5, 6, 7 , 8 , 9 , 0];
Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
Lowercase =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});



// Start function to generate password
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("Gotta pick something bro");
  } else if (enter < 8 || enter > 128) {
   
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {

    confirmNumber = confirm("Do ya want numbers?");
    confirmUppercase = confirm("Do ya want Uppercase letters");
    confirmLowercase = confirm("Do ya want Lowercase letters");
    confirmSymbol = confirm("Do ya want Symbols");
  };
// 4 false
  if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmSymbol) {
    
  }
// 4 true
  else if (confirmNumber && confirmUppercase && confirmLowercase && confirmSymbol) {
    choices = symbol.concat(number, Uppercase, Lowercase);
  }
 
  // 3 true
  else if (confirmUppercase && confirmLowercase && confirmSymbol) {
    choices = symbol.concat(number, Uppercase, Lowercase);
  }
  else if (confirmSymbol && confirmNumber && confirmLowercase) {
      choices = symbol.concat(number, Lowercase);
  }
  else if (confirmSymbol && confirmLowercase && confirmUppercase) {
      choices = symbol.concat(lowercase, Uppercase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(lowercase, Uppercase);

  }
       // 2 true

    else if (confirmSymbol && confirmNumber) {
      choices = symbol.concat(number);

  } else if (confirmSymbol && confirmLowercase) {
      choices = symbol.concat(lowercase);

  } else if (confirmsymbol && confirmUppercase) {
      choices = character.concat(Uppercase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowercase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowercase.concat(Uppercase);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(Uppercase);
  }
  // 1 true
  else if (confirmsymbol) {
      choices = symbol;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = Lowercase;
  };

  var password = [];
   // let the randomizing begin
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
}






  

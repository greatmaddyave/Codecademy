var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if ((computerChoice >= 0) & (computerChoice <= 0.33)) {
    computerChoice = "rock";

} else if ((computerChoice >= 0.34) & (computerChoice <= 0.66)) {
    computerChoice = "paper";

} else {
    computerChoice = "scissors";

};

var compare = function(choice1, choice2) {

  if(choice1 === choice2){
      return("The result is a tie!");
  }

    if(choice1 === "rock") {
        if (choice2 === "scissors") {
           return("rock wins!");
        } else {
           return("paper wins!");
        }
    };

    if(choice1 === "paper") {
        if(choice2 === "rock") {
           return("paper wins!");
        } else {
           return("scissors wins");
        }
    };

    if(choice1 === "scissors") {
        if(choice2 === "paper") {
            return("scissors wins!");
        } else {
            return("rock wins");
        }
    }
};

console.log("You:" + " " + userChoice);
console.log("Computer:" + " " + computerChoice);
console.log("********WINNER********");
console.log(compare(userChoice, computerChoice));

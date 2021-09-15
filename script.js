let game = {
    validMoves: ["R","P","S"],
    moveNames: ["Rock","Paper","Scissors"],
    gameResult: ["Draw","User wins!","Computer wins!"],
    winner: function(s1,s2){
        console.log(s1,s2);
        if (s1===s2){
            console.log("Equal");
            return 0;
        } else if ((s1==="R" && s2==="P") || (s1==="P" && s2==="S") || (s1==="S" && s2==="R")){
            console.log("Computer");
            return 2;
        } else {
            console.log("User");
            return 1;
        }
    }
};

let isGameFinished = false; 
let userWins = 0;
let computerWins = 0;

function endGame() {
    if (confirm("Are you ready to give up?")) {
        let finalWinner = "Draw ";
        if (userWins>computerWins){
            finalWinner = "User wins ";
        } else  if (userWins<computerWins){
            finalWinner = "Computer wins ";
        }
        isGameFinished = true;
        document.getElementById("finalScore").innerHTML = finalWinner+userWins+" to "+computerWins;
      } 
}

function playGame() {
    let text;

    if(isGameFinished) {
        document.getElementById("finalScore").innerHTML = " ";
        userWins = 0;
        computerWins = 0;
        isGameFinished = false
    }

    let puserChoice = prompt("(R)ock, (P)aper, or (S)cissors:");
    let userChoice = puserChoice.toUpperCase();
    if (userChoice == null || userChoice == "" || !(game.validMoves.includes(userChoice))) {
      text = "Invalid entry.";
      return;
    } else {
      text = "You entered " + userChoice ;
    }
    let computerChoice = game.validMoves[Math.floor(Math.random() * 3)];
    text = text + ". Computer picks "+computerChoice;
    alert("Computer picks "+computerChoice);
    document.getElementById("result").innerHTML = text;

    let result = game.winner(userChoice,computerChoice);
    let alertText = game.gameResult[result];
    alert(alertText);

    if (result===1){
        userWins++;
    } else if (result===2){
        computerWins++;
    }
    document.getElementById("scoreUser").innerHTML = userWins;
    document.getElementById("scoreComputer").innerHTML = computerWins;

    
  }
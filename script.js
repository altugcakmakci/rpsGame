let game = {
    validMoves: ["R","P","S"],
    moveNames: ["Rock","Paper","Scissors"],
    gameResult: ["Draw","User wins!","Computer wins!"],
    userWins:0,
    computerWins:0,
    isGameFinished: false,
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


function endGame() {
    if (confirm("Are you ready to give up?")) {
        let finalWinner = "Draw ";
        if (game.userWins>game.computerWins){
            finalWinner = "User wins ";
        } else  if (game.userWins<game.computerWins){
            finalWinner = "Computer wins ";
        }
        game.isGameFinished = true;
        document.getElementById("finalScore").innerHTML = finalWinner+game.userWins+" to "+game.computerWins;
      } 
}

function playGame() {
    let text;

    if(game.isGameFinished) {
        document.getElementById("finalScore").innerHTML = " ";
        game.userWins = 0;
        game.computerWins = 0;
        game.isGameFinished = false
    }

    let puserChoice = prompt("(R)ock, (P)aper, or (S)cissors:");
    let userChoice = puserChoice.toUpperCase();
    let idxUser;
    if (userChoice == null || userChoice == "" || !(game.validMoves.includes(userChoice))) {
      text = "Invalid entry.";
      return;
    } else {
      idxUser = game.validMoves.indexOf(userChoice);
      text = "You entered " + game.moveNames[idxUser] ;
    }

    let computerChoice = game.validMoves[Math.floor(Math.random() * 3)];
    let idxComp = game.validMoves.indexOf(computerChoice);
    text = text + ". Computer picks "+game.moveNames[idxComp];
    alert("Computer picks "+game.moveNames[idxComp]);
    document.getElementById("result").innerHTML = text;

    let result = game.winner(userChoice,computerChoice);
    let alertText = game.gameResult[result];
    alert(alertText);

    if (result===1){
        userWins++;
    } else if (result===2){
        game.computerWins++;
    }
    document.getElementById("scoreUser").innerHTML = game.userWins;
    document.getElementById("scoreComputer").innerHTML = game.computerWins;

  }
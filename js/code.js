
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice ==  1){
        return 'rock';
    }
    else if(choice == 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
function round(getHumanChoice,getComputerChoice){

    let humanChoice = getHumanChoice.toLowerCase();
    let computerChoice = getComputerChoice.toLowerCase()  ;
    if((humanChoice == "rock"&& computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper")  || (humanChoice == "paper" && computerChoice == "rock")){
        return 1;
    }
    else if(humanChoice == computerChoice){
        return 2;
    }
    else {
        return  0;
    }
}
function getHumanChoice(message){
    return String(prompt(message + " enter your choice 'rock','paper','scissor' "));
}

/*
function game(){
    let plCount=0,compCount=0,drawCount=0;
    for (let i =0;i<5;i++){
        let whoWon =round(getHumanChoice("round" + (i+1)),getComputerChoice());
        if(whoWon == 1){
            plCount++;
        }
        else if(whoWon == 0){
            compCount++;
        }
        else {
            drawCount++;
        }
        console.log("player won: "+ plCount+ ",  computer won: "+compCount + ",  draws: " + drawCount);
    }
    let winner =  (plCount>compCount )? "you " : ((compCount > plCount )? "the engine" : "noone its draw");
    console.log("the winner is " +  winner  );
}
game();
*/



const moves = document.querySelectorAll('.move');
moves.forEach(move => {
    move.addEventListener('click' , startGame);
});

var numOfGames =  0; 
const maxNumberOfGames = 5;
let plwins=0;
let compwins=0;


function startGame(event){
    const humanChoice = this.id; 
    var computerChoice = getComputerChoice();
    if(numOfGames>maxNumberOfGames) return;
    if(numOfGames == maxNumberOfGames){ //finish the game
        const message = document.querySelector(".message");
        const roundResult = document.querySelector(".roundResult");
        let winner =  (plwins>compwins )? "you won" : ((compwins > plwins )? "you lost" : "its draw");
        roundResult.textContent  = winner;
        message.textContent = "";
        console.log("the winner is " +  winner  );
        numOfGames++;
    }else{ //continue the game
        var roundResult  = round(humanChoice,computerChoice);
        const message = document.querySelector(".message");
        const humScore  = document.getElementById("humanScore");
        const aiScore  = document.getElementById("aiScore");
        if(roundResult == 1){
            plwins++;
            message.textContent = "keep going";
            humScore.textContent = plwins.toString();
        }
        else if(roundResult == 0){
            compwins++;
            message.textContent = "you lost this round";
            aiScore.textContent = compwins.toString();
        }
        else {
            message.textContent = "draw";
        }
        console.log( `humanChoice "${humanChoice}", computerChoice "${computerChoice}" , "${roundResult}"`);
        console.log(`"${numOfGames}"  : :: :   "${maxNumberOfGames}" `);
        numOfGames++;
    }
}

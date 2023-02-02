


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice ==  1){
        return 'rock';
    }
    else if(choice == 2){
        return 'paper';
    }
    else {
        return 'scissor';
    }
}
function round(getHumanChoice,getComputerChoice){

    let humanChoice = getHumanChoice.toLowerCase();
    let computerChoice = getComputerChoice.toLowerCase()  ;
    if((humanChoice == "rock"&& computerChoice == "scissor") || (humanChoice == "scissor" && computerChoice == "paper")  || (humanChoice == "paper" && computerChoice == "rock")){
        return 1;
    }
    else if(humanChoice == computerChoice){
        return 0;
    }
    else {
        return  2;
    }
}
function getHumanChoice(message){
    return String(prompt(message + " enter your choice 'rock','paper','scissor' "));
}
function game(){
    let plCount=0,compCount=0,drawCount=0;
    for (let i =0;i<5;i++){
        let whoWon =round(getHumanChoice("round" + (i+1)),getComputerChoice());
        if(whoWon == 1){
            plCount++;
        }
        else if(whoWon == 2){
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


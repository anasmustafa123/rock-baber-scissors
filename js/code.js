
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

const moves = document.querySelectorAll('.move');
moves.forEach(move => {
    move.addEventListener('click' , startGame);
    move.addEventListener("click" , isClicked);
    move.addEventListener('transitionend', isTransitionFinished);
});                        

var numOfGames =  1; 
const maxNumberOfGames = 5;
let plwins=0;
let compwins=0;


function startGame(event){
    const humanChoice = this.id; 
    var computerChoice = getComputerChoice();
    if(numOfGames>maxNumberOfGames) return;
    else{ //continue the game
        var roundResult  = round(humanChoice,computerChoice);
        const message = document.querySelector(".message");
        const humScore  = document.getElementById("humanScore");
        const aiScore  = document.getElementById("aiScore");
        const humanMove = document.querySelector('#humanMove');
        const aiMove    = document.querySelector("#aiMove");
        aiMove.src =  "./imgs/"+computerChoice+".png";
        humanMove.src = "./imgs/"+humanChoice + ".png";
        let messageText = "";
        if(roundResult == 1){
            plwins++;
            messageText = "keep going";
            humScore.textContent = plwins.toString();
        }
        else if(roundResult == 0){
            compwins++;
            messageText = "you lost this round";
            aiScore.textContent = compwins.toString();
        }
        else {
            messageText = "draw";
        }
        if(numOfGames == maxNumberOfGames){ //finish the game
            const roundResult = document.querySelector(".roundResult");
            let winner =  (plwins>compwins )? "you won" : ((compwins > plwins )? "you lost" : "its draw");
            roundResult.textContent  = winner;
            numOfGames++;
            messageText = "play again";
            message.addEventListener('click', newGame);
        }
        message.textContent = messageText;
        numOfGames++;
    }
}
function isClicked(){
    this.classList.add('pushImg');
    const audio = document.querySelector('.clickSound');
    audio.currentTime = 0;
    audio.play();
}
function isTransitionFinished(event){
    if(event.propertyName != 'transform') return;
    this.classList.remove('pushImg');
}
function newGame(event){
    numOfGames = 1;
    const roundResult = document.querySelector('.roundResult');
    const message  = document.querySelector('.message');
    const humanScore = document.getElementById('humanScore');
    const aiScore = document.getElementById('aiScore');
    const humanPic = document.querySelector('#humanMove');
    const aiPic = document.querySelector('#aiMove');
    message.textContent = "";
    roundResult.textContent = "";
    aiScore.textContent = '0';
    humanScore.textContent = '0';
    plwins = 0;
    compwins = 0;
    aiPic.src = "./imgs/ai.png";
    humanPic.src = "./imgs/gamer.png";
}
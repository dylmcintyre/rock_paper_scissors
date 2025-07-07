let humanScore=0;
let computerScore=0;


function getComputerChoice(){
    const rand=Math.random();
    if (rand<=0.33) {
        return "rock";
    }
    else if(rand>0.33 && rand<=0.66){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function getHumanChoice(){
    const choice=prompt("Input your choice: ").toLowerCase();
    if ((choice=="rock")||(choice=="scissors")||(choice=="paper")){
        return choice;
    }
    else{
        console.log('invalid choice.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    while(humanChoice == computerChoice) {
        console.log("You tied, choose again.");
        humanChoice= getHumanChoice();
        computerChoice= getComputerChoice();
    }
    console.log("human choice: " + humanChoice);
    if (humanChoice=="rock"){
        if(computerChoice=="scissors"){
            humanScore+=1;
            return("You win! Rock beats scissors.")
        }
        else{
            computerScore+=1;
            return("You lose! Paper beats rock.")
        }
    }
    if (humanChoice=="scissors"){
        if(computerChoice=="rock"){
            computerScore+=1;
            return("You lose! Rock beats scissors.")
        }
        else{
            humanScore+=1;
            return("You win! Scissors beats paper.")
        }
    }
    else {
        if(computerChoice=="rock"){
            humanScore+=1;
            return("You win! Paper beats rock.")
        }
        else{
            computerScore+=1;
            return("You lose! Scissors beats paper.")
        }
    }
}

function playGame(){
    for(let i=0; i<5; i+=1) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore>computerScore) {
        return (`You win the game! You got ${humanScore} while the computer got ${computerScore}`);
    }
    else{
        return (`You lose the game! You got ${humanScore} while the computer got ${computerScore}`);
    }
}

console.log(playGame());
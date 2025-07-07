let humanScore=0;
let computerScore=0;

const results_window=document.querySelector(".results")

const rock_btn=document.querySelector(".rock");
rock_btn.addEventListener("click", function(){ 
    playRound("rock", getComputerChoice());
});

const paper_btn=document.querySelector(".paper");
paper_btn.addEventListener("click", function(){ 
    playRound("paper", getComputerChoice());
});

const scissors_btn=document.querySelector(".scissors");
scissors_btn.addEventListener("click", function(){ 
    playRound("scissors", getComputerChoice());
});

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
    if(humanChoice == computerChoice) {
        results_window.textContent="You tied, choose again.";
    }
    else if (humanChoice=="rock"){
        if(computerChoice=="scissors"){
            humanScore+=1;
            results_window.textContent="You win! Rock beats scissors.";
        }
        else{
            computerScore+=1;
            results_window.textContent="You lose! Paper beats rock.";
        }
    }
    else if (humanChoice=="scissors"){
        if(computerChoice=="rock"){
            computerScore+=1;
            results_window.textContent="You lose! Rock beats scissors.";
        }
        else{
            humanScore+=1;
            results_window.textContent="You win! Scissors beats paper.";
        }
    }
    else {
        if(computerChoice=="rock"){
            humanScore+=1;
            results_window.textContent="You win! Paper beats rock.";
        }
        else{
            computerScore+=1;
            results_window.textContent="You lose! Scissors beats paper."
        }
    }
    updateScore();
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

function updateScore(){
    human_tally.textContent=humanScore;
    computer_tally.textContent=computerScore;
}
const human_tally_label=document.createElement("h1");
const computer_tally_label=document.createElement("h1");
const human_tally=document.createElement("h1");
const computer_tally=document.createElement("h1");
human_tally_label.textContent="Your Score  ";
computer_tally_label.textContent="Computer Score  ";
human_tally.textContent=humanScore;
computer_tally.textContent=computerScore;
human_tally.classList.toggle("numb");
computer_tally.classList.toggle("numb");


const div=document.createElement("div");
const div1=document.createElement("div");
const div2=document.createElement("div");
div1.append(human_tally_label);
div2.append(computer_tally_label);
div1.append(human_tally);
div2.append(computer_tally);
div.append(div1);
div.append(div2);
div.classList.toggle("score");
body=document.querySelector("body");
body.append(div);
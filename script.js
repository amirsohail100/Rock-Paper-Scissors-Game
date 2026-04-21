let youScore = 0;
let compScore = 0;

// const rock = document.querySelector("#rock"); 
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#You-score");
const compScorep = document.querySelector("#Comp-score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    const arr = ["rock","paper","scissors"];
    return arr[Math.floor(Math.random()*3)]
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
const showwin = (win,userChoice,compChoice)=>{
    if(win){
        youScore++;
        userscorep.innerText = youScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorep.innerText = compScore;
        console.log("comp");
        msg.innerText = `You Loss. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice()
    console.log('click',userChoice,compChoice);
    
    if(userChoice === compChoice){
        console.log("Draw");
        msg.innerText = "Game was Draw. Play again.!"
        msg.style.backgroundColor = "#313e4d";
    }else{
        let youWin = true;
        if(userChoice === "rock"){
            if(compChoice === "scissors"){
                youWin = true;
            }else{
                youWin = false;
            }
        }else if(userChoice === "paper"){
            if(compChoice === "rock"){
                youWin = true;
            }else{
                youWin = false;
            }
        }else{
            if(compChoice === "paper"){
                youWin = true;
            }else{
                youWin = false;
            }
        }
        showwin(youWin,userChoice,compChoice);
    }
}
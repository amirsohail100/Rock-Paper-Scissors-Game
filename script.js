let youScore = 0;
let compScore = 0;

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
        
        // --- UI Shake Animation Trigger ---
        choice.classList.add("shake");
        setTimeout(() => {
            choice.classList.remove("shake");
        }, 500);

        playGame(userChoice);
    })
})

const showwin = (win,userChoice,compChoice)=>{
    if(win){
        youScore++;
        userscorep.innerText = youScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.background = "linear-gradient(135deg, #166534, #22c55e)" // Modern Green gradient
        msg.style.boxShadow = "0 0 20px rgba(34, 197, 94, 0.5)"
    }else{
        compScore++;
        compScorep.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`
        msg.style.background = "linear-gradient(135deg, #991b1b, #ef4444)" // Modern Red gradient
        msg.style.boxShadow = "0 0 20px rgba(239, 68, 68, 0.5)"
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice()
    
    if(userChoice === compChoice){
        msg.innerText = "Game was Draw. Play again!"
        msg.style.background = "linear-gradient(135deg, #334155, #475569)" // Modern Slate gradient
        msg.style.boxShadow = "0 0 20px rgba(100, 116, 139, 0.5)"
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
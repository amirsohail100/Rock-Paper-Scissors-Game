let youScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#You-score");
const compScorep = document.querySelector("#Comp-score");
const choices = document.querySelectorAll(".choice");

const userDisplayMove = document.querySelector("#user-display-move");
const compDisplayMove = document.querySelector("#comp-display-move");
const battleArena = document.querySelector(".battle-arena");
const themeToggleBtn = document.querySelector("#theme-toggle");
const bodyElement = document.body;

// Theme Toggle Functionality
themeToggleBtn.addEventListener("click", () => {
    if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
        bodyElement.classList.add("light-mode");
        themeToggleBtn.innerText = "🌙";
    } else {
        bodyElement.classList.remove("light-mode");
        bodyElement.classList.add("dark-mode");
        themeToggleBtn.innerText = "☀️";
    }
});

const genCompChoice = ()=>{
    const arr = ["rock","paper","scissors"];
    return arr[Math.floor(Math.random()*3)]
}

// Helper to get image HTML for visual battle display
const getMoveImageHtml = (choice) => {
    return `<img src="${choice}.png" alt="${choice}">`;
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        // Trigger Battle Arena Shake Animation
        battleArena.classList.add("shake-active");
        setTimeout(() => {
            battleArena.classList.remove("shake-active");
        }, 400);

        playGame(userChoice);
    })
})

const showwin = (win,userChoice,compChoice)=>{
    // Update visual battle cards with chosen images
    userDisplayMove.innerHTML = getMoveImageHtml(userChoice);
    compDisplayMove.innerHTML = getMoveImageHtml(compChoice);

    if(win){
        youScore++;
        userscorep.innerText = youScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.background = "linear-gradient(135deg, #166534, #22c55e)"
        msg.style.color = "#ffffff"
        msg.style.boxShadow = "0 0 25px rgba(34, 197, 94, 0.6)"
        
        // Trigger Victory Confetti Particles Effect
        if(typeof confetti === 'function') {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }else{
        compScore++;
        compScorep.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`
        msg.style.background = "linear-gradient(135deg, #991b1b, #ef4444)"
        msg.style.color = "#ffffff"
        msg.style.boxShadow = "0 0 25px rgba(239, 68, 68, 0.6)"
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice()
    
    if(userChoice === compChoice){
        userDisplayMove.innerHTML = getMoveImageHtml(userChoice);
        compDisplayMove.innerHTML = getMoveImageHtml(compChoice);

        msg.innerText = "Game was Draw. Play again!"
        msg.style.background = "linear-gradient(135deg, #334155, #475569)"
        msg.style.color = "#ffffff"
        msg.style.boxShadow = "0 0 25px rgba(100, 116, 139, 0.6)"
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
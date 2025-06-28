let userScore = 0;
let  compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

showWinner = (userChoice,compChoice,userWin) => {
    if(userWin === true) {
        console.log("u win");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;

    }
    else{
        console.log("you lose")
        msg.innerText = `you Lose! comp ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;

    }
}

drawGame = () => {
        console.log("game is draw");
        msg.innerText = "Game is draw , play Again!!";
        msg.style.backgroundColor = "#081b31";
}

compGen = ()=> {
    arr = ["rock", "paper", "scissors"];
    const ranindx = Math.floor(Math.random()*3);
    return arr[ranindx];
}
playGame = (userChoice) => {
   
   const compChoice = compGen();
   console.log("userChoice=",userChoice);
   console.log("compchoice=",compChoice);
    
   if (compChoice === userChoice){
    drawGame();
   }
   else{
     userWin = true;
     if(userChoice === "rock"){
        //paper,scissors
        userWin= compChoice === "paper" ? false : true;
     }

     else if (userChoice === "paper"){
        // rock, scissors
        userWin = compChoice === "scissors" ? false : true; 
     } else if (userChoice === "scissors"){
        //rock,paper
        userWin = compChoice  === "rock" ? false : true;
     }
        console.log(userWin)
     showWinner(userChoice,compChoice,userWin);
   }
   

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id")
        
        playGame(userChoice);

    })
})
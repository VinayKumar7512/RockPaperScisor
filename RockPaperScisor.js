let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];  
}
const drawGame = () => {
   // console.log("Game was Draw");
    msg.innerText = "Game was Draw - Play Again";
    msg.style.backgroundColor = "maroon";
};
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userscore++;
        uscore.innerText = userscore;
       // console.log("You Won the Game!");
        msg.innerText = `You Won the Game! - ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        cscore.innerText = compscore;
      //  console.log("You Lost the Game!");
        msg.innerText = `You Lost the Game - ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const play = (userChoice) => {
    console.log("user choice: ",userChoice);
    // Computer choice:
    const compChoice = genCompChoice();
  //  console.log("Comp choice: ",compChoice);
    if(userChoice === compChoice){
        // Draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
         userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    } 
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=> {
    const userChoice = choice.getAttribute("id");
     play(userChoice);
    });
});
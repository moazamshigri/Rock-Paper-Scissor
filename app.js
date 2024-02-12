// Important Msg 
// This is a simple code written by Moazam shigri and all right Reserved
let userScore = 0;
let comScore = 0;

const msg = document.querySelector("#msg");
let uScore = document.querySelector("#userScore");
let cScore = document.querySelector("#comScore");





const choices = document.querySelectorAll(".choice");

const genComChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    let randnum = Math.floor(Math.random() * 3);
    return options[randnum];
}

const showWinner = (userWon) =>{
    if(userWon){
        userWin();
    }
    else{
        compWin();
    }
    uScore.innerText = userScore;
    cScore.innerText = comScore;
}
const playgame = (userChoice) => {
    console.log(userChoice);
    const computerChoice = genComChoice();
    console.log(`user Choice = ${userChoice}`);
    console.log(`Computer Choice = ${computerChoice}`);
    if (userChoice == computerChoice) {
        // Draw
        Draw();
    }
    else{
        let userWon = true;
        if(userChoice === "Paper")
        {
            userWon = computerChoice === "Scissor" ? false:true;

        }
        else if(userChoice === "Paper")
        {
            userWon = computerChoice === "Scissor" ? false:true;

        }
        else if(userChoice === "Rock")
        {
            userWon = computerChoice === "Paper" ? false:true;

        }
        else if(userChoice === "Scissor")
        {
            userWon = computerChoice === "Rock" ? false:true;

        }
        showWinner(userWon);
        


    }
    // if (userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissor" && computerChoice === "Paper" || userChoice === "Rock" && computerChoice === "Scissor") {
    //     // User Wins
    //     userWin();
    // }
    // if (userChoice === "Rock" && computerChoice === "Paper" || userChoice === "Paper" && computerChoice === "Scissor" || userChoice === "Scissor" && computerChoice === "Rock") {
    //     // Computer  Wins
    //     compWin();
    // }

}
const Draw = () => {
    console.log("draw")

    msg.innerText = "Game Was Drawn";
}

const userWin = () => {
    console.log("You win");
    userScore += 1;
    msg.innerText = "You Win";
}

const compWin = () => {
    console.log("com win");
    comScore += 1;
    msg.innerText = "Computer Win";
}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playgame(userChoice);
    })
})

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button')

function getComputerChoice(){
    const computerOptions = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * computerOptions.length)
    return computerOptions[random]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function restartGame(){
    const restart = document.getElementById('restart');
    const restartButton = document.createElement('button');
    restartButton.classList.add("restartButton");
    restartButton.innerHTML = 'Restart';
    restartButton.addEventListener("click", function(){
        goToIndex();
    });
    restart.appendChild(restartButton);

}
function goToIndex(){
    window.location.href="index.html";
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Press the Restart Button to Play Again'
            disableButtons()
            restartGame()
            
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
            
        if (computerScore == 5) {
            result += '<br><br>I won the game! Press the Restart Button to Play Again'
            disableButtons()
            restartGame()
            
        }
    }

document.getElementById('result').innerHTML = result
return

}

buttons.forEach(button =>{
button.addEventListener('click', function(){
    playRound(button.value)
})
})




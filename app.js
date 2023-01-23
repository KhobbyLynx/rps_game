const userChoiceButtons = document.querySelectorAll('.userChoice');
const computerChoiceButtons = document.querySelectorAll('.computerButtons');
const results = document.querySelector('#results');
let computerChoice;
let userChoice;


const userButtonsColor = () => {
    if (userChoice === 'rock') {
        userChoiceButtons[0].style.background ='#ff4545';
        userChoiceButtons[1].style.background ='#33c3ce';
        userChoiceButtons[2].style.background ='#33c3ce';
    }
    if (userChoice === 'paper') {
        userChoiceButtons[1].style.background ='#ff4545';
        userChoiceButtons[0].style.background ='#33c3ce';
        userChoiceButtons[2].style.background ='#33c3ce';
    }
    if (userChoice === 'scissors') {
        userChoiceButtons[2].style.background ='#ff4545';
        userChoiceButtons[1].style.background ='#33c3ce';
        userChoiceButtons[0].style.background ='#33c3ce';
    }
}
const computerButtonsColor = () => {
    if (computerChoice === 'rock') {
        computerChoiceButtons[0].style.background ='#ff4545';
        computerChoiceButtons[1].style.background ='#33c3ce';
        computerChoiceButtons[2].style.background ='#33c3ce';
    }
    if (computerChoice === 'paper') {
        computerChoiceButtons[1].style.background ='#ff4545';
        computerChoiceButtons[0].style.background ='#33c3ce';
        computerChoiceButtons[2].style.background ='#33c3ce';
    }
    if (computerChoice === 'scissors') {
        computerChoiceButtons[2].style.background ='#ff4545';
        computerChoiceButtons[1].style.background ='#33c3ce';
        computerChoiceButtons[0].style.background ='#33c3ce';
    }
}
const generateComputerChoice = () => {
    const gameChoice = ['rock', 'paper', 'scissors'] 
    const randomNumber = Math.floor(Math.random()*gameChoice.length);
    computerChoice = gameChoice[randomNumber];
    computerButtonsColor()
}

const gameRules = () => {
    if (userChoice === computerChoice) {
        results.innerHTML = "Tie Game 🥂";  
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            results.innerHTML = 'Computer Wins 😫';
        } else {
            results.innerHTML = 'Player Wins 😎';
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            results.innerHTML = 'Computer Wins 😫';
        } else {
            results.innerHTML = "Player Wins 😎";
        }
    } else if (userChoice === "scissors") {
         if (computerChoice === "rock") {
                results.innerHTML = 'Computer Wins 😫';
            } else {
                results.innerHTML = "Player Wins 😎";
            }
    } 
}

userChoiceButtons.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userButtonsColor()
    generateComputerChoice()
    gameRules()
    console.log(userChoice)
    console.log(computerChoice)
}))



const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
  };
  
  
  function getComputerChoice() {
    let random = Math.floor(Math.random()* 3);
    if (random === 0) {
      return 'rock';
    } else if (random === 1) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }
  //console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return 'The Computer won!'
      } else {
        return 'You won!'
      }
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'scissors'){
        return 'You won!';
      } else {
        return 'The Computer won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return 'The Computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb') {
      if (computerChoice === 'scissors' || computerChoice === 'paper' || computerChoice === 'rock'){
        return 'You won!';
      } 
    }
  };
  
  
  // console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
  // console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
  // console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
  
  
  function playGame(){
    let userChoice = getUserChoice('bomb'); // can be change by 'rock', 'paper' or 'scissors' 
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame()

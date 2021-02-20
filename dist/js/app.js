// Turn rules overlay on and off
const rulesOn = () => {
  document.getElementById('overlay').style.display = 'block';
};

const rulesOff = () => {
  document.getElementById('overlay').style.display = 'none';
};

// Get Random Value
const getRandNum = () => {
  return Math.floor((Math.random() * 10) / 2);
};

// Get Message for Player
const getMessage = (playerVal, houseVal) => {
  let message;
  switch (playerVal) {
    case 'scissors':
      switch (houseVal) {
        case 'paper':
        case 'lizard':
          message = 'YOU WIN!';
          break;
        case 'rock':
        case 'spock':
          message = 'You Lose';
          break;
        default:
          message = 'You Tie';
          break;
      }
      break;
    case 'paper':
      switch (houseVal) {
        case 'rock':
        case 'spock':
          message = 'YOU WIN!';
          break;
        case 'scissors':
        case 'lizard':
          message = 'You Lose';
          break;
        default:
          message = 'You Tie';
          break;
      }
      break;
    case 'rock':
      switch (houseVal) {
        case 'scissors':
        case 'lizard':
          message = 'YOU WIN!';
          break;
        case 'paper':
        case 'spock':
          message = 'You Lose';
          break;
        default:
          message = 'You Tie';
          break;
      }
      break;
    case 'spock':
      switch (houseVal) {
        case 'scissors':
        case 'rock':
          message = 'YOU WIN!';
          break;
        case 'paper':
        case 'lizard':
          message = 'You Lose';
          break;
        default:
          message = 'You Tie';
          break;
      }
      break;
    case 'lizard':
      switch (houseVal) {
        case 'paper':
        case 'spock':
          message = 'YOU WIN!';
          break;
        case 'scissors':
        case 'rock':
          message = 'You Lose';
          break;
        default:
          message = 'You Tie';
          break;
      }
      break;
  }
  return message;
};

// Get Value from Icon Click
const iconClick = (value) => {
  let iconArr = ['scissors', 'paper', 'spock', 'rock', 'lizard'];
  let houseVal = iconArr[getRandNum()];
  let playerVal = value;
  let message = getMessage(playerVal, houseVal);

  console.log(playerVal, houseVal, message);
};

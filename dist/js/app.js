// Check Local Storage On Page Load
document.addEventListener('DOMContentLoaded', () => {
  console.log(sessionStorage);
  let existingScore = sessionStorage.getItem('RPSSL_Score');
  if (!existingScore) {
    sessionStorage.setItem('RPSSL_Score', 0);
    document.querySelector('.actual-score').innerText = 0;
  } else {
    document.querySelector('.actual-score').innerText = existingScore;
  }
});

// Turn rules overlay on
const rulesOn = () => {
  document.getElementById('overlay').style.display = 'block';
};

// Turn rules overlay off
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

// Create Icon HTML
const createIconHTML = (icon) => {
  let iconHTML = `<div id="${icon}-icon" class="icon-container icon-container-${icon}">
  <img src="images/icon-${icon}.svg" alt="${icon}">
</div>`;

  return iconHTML;
};

// Find New Score
const getNewScore = (message) => {
  if (message === 'YOU WIN!') {
    return parseInt(sessionStorage.getItem('RPSSL_Score')) + 1;
  } else if (message === 'You Tie') {
    return sessionStorage.getItem('RPSSL_Score');
  } else {
    return parseInt(sessionStorage.getItem('RPSSL_Score')) - 1;
  }
};

// Icon Click
const iconClick = (value) => {
  let iconArr = ['scissors', 'paper', 'spock', 'rock', 'lizard'];
  let houseVal = iconArr[getRandNum()];
  let playerVal = value;
  let message = getMessage(playerVal, houseVal);
  let newScore = getNewScore(message);

  // Add Player Icon to HTML
  document.getElementById('icon-player').innerHTML = createIconHTML(playerVal);

  // Add House Icon to HTML
  document.getElementById('icon-house').innerHTML = createIconHTML(houseVal);

  // Add Message to HTML
  document.getElementById('your-outcome').innerText = message;

  // Save New Score to Session Storage
  sessionStorage.setItem('RPSSL_Score', newScore);

  // Transition Choices Container Out
  document.getElementById('choices-container').style.display = 'none';

  // Transition Game Play Container In
  document.getElementById('game-play-container').style.display = 'flex';

  // Transition House Pick Circle Out and House Pick Icon In (after 1/2s)
  setTimeout(() => {
    document.getElementById('house-pick-circle').style.display = 'none';
    document.getElementById('icon-house').style.display = 'flex';
  }, 1500);

  // Transition Outcome Container in, Display new Score(after 1s), Highlight Winning Icon
  setTimeout(() => {
    document.getElementById('outcome-container').style.display = 'flex';
    document.querySelector('.actual-score').innerText = newScore;
    if (message === 'YOU WIN!') {
    }
    if (message === 'You Lose') {
    }
  }, 3000);
};

// Click Play Again
const playAgainClick = () => {
  document.getElementById('choices-container').style.display = 'flex';

  document.getElementById('game-play-container').style.display = 'none';

  document.getElementById('house-pick-circle').style.display = 'flex';

  document.getElementById('icon-house').style.display = 'none';

  document.getElementById('outcome-container').style.display = 'none';
};

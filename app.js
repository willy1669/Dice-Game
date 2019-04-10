/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his CURRENT score gets added to his GL0BAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// a prompt that asks for change of name
var player0 = prompt('Enter name');
var player1 = prompt('Enter name');


// Get all the elements on the DOM we need
var newGame = document.querySelector('.btn-new');
var name0 = document.querySelector('#name-0');
var score0 = document.querySelector('#score-0');
var current0 = document.querySelector('#current-0');
var name1 = document.querySelector('#name-1');
var score1 = document.querySelector('#score-1');
var current1 = document.querySelector('#current-1');
var rollDice = document.querySelector('.btn-roll');
var hold = document.querySelector('.btn-hold');
var dice = document.querySelector('.dice');
var currentScore = [0 , 0];
var globalScore = [0 , 0];
var activePlayer = 0;

//change the player name
name0.textContent = player0;
name1.textContent = player1;

init()
function init() {
score0.textContent = 0;
current0.textContent = 0;
score1.textContent = 0;
current1.textContent = 0;
dice.src = "dice-1.png";
// reset all scores to 0
globalScore[0] = 0;
globalScore[1] = 0;
currentScore[0] = 0;
currentScore[1] = 0;
}

newGame.addEventListener('click' , init);
rollDice.addEventListener('click' , function() {
  // get a random number
  var number = Math.floor(Math.random() * 6 + 1);
  dice.src = "dice-"+number+".png";
  if (number === 1) {
  // reset Current score for active player
  currentScore[activePlayer] = 0;

  // Remove active styling from active player div
  document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

  //switch player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;

  //Switch active styling from active player div
  document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}
 else {
  currentScore[activePlayer] += number;
  document.querySelector('#current-'+activePlayer).textContent = currentScore[activePlayer];
}
});
//
hold.addEventListener('click' , function(){

    globalScore[activePlayer] += currentScore[activePlayer];

    document.querySelector('#score-' +activePlayer).textContent = globalScore[activePlayer];

    currentScore[activePlayer] = 0;

    document.querySelector('#current-'+activePlayer).textContent = currentScore[activePlayer];

    // Remove Active Styling from active player div
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

    // Switch player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;

    // Switch Active Styling to active player div
    document.querySelector('.player-' +activePlayer+'-panel').classList.add('active');

});

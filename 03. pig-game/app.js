/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, round, active, gameplay;

init();

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// document.querySelector('#current-' + active).textContent = dice;
// document.querySelector('#current-' + active).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-' + active).textContent;
// console.log(x);

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gameplay) {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display Dice
    var dispDice = document.querySelector('.dice');
    dispDice.style.display = 'block';
    dispDice.src = 'dice-' + dice + '.png';

    // 3. Update Round Score
    if (dice !== 1) {
      round += dice;
      document.getElementById('current-' + active).textContent = round;
    } else {
      switchActive();
      document.querySelector('.dice').style.display = 'none';
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gameplay) {
    // 1. Add round score to global scores
    score[active] += round;

    // 2. Update the UI with global scores
    document.getElementById('score-' + active).textContent = score[active];

    // 3. Check the game winning condition
    if (score[active] >= winScore) {
      document.querySelector('#name-' + active).textContent = 'Winner!';
      document.querySelector('.player-' + active + '-panel').classList.add('winner');
      document.querySelector('.player-' + active + '-panel').classList.remove('active');
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.dices').style.display = 'none';
      gameplay = false;
    } else {
      // 4. Switch the current active player
      switchActive();
    }
  }
});

function switchActive() {
  round = 0;
  active === 0 ? active = 1 : active = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  score = [0, 0];
  round = 0;
  active = 0;
  gameplay = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('active', 'winner');
  document.querySelector('.player-1-panel').classList.remove('active', 'winner');
  document.querySelector('.player-0-panel').classList.add('active');
}

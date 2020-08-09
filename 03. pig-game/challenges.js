/*
Coding Challenge # 6
---------------------
1. player looses the entire score when 2 consecutive SIX in a row.
2. input field to set the winning score by custom setting changes.
3. add another dice, player looses the roundif any of them is a 1.

*/

var score, round, active, gameplay, last, winScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gameplay) {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dices = Math.floor(Math.random() * 6) + 1;

    console.log('dice = ' + dice + ', dices = ' + dices + ', last = ' + last);

    // 2. Display Dice
    var dispDice = document.querySelector('.dice');
    var dispDices = document.querySelector('.dices');
    dispDice.style.display = 'block';
    dispDice.src = 'dice-' + dice + '.png';

    dispDices.style.display = 'block';
    dispDices.src = 'dice-' + dices + '.png';

    // # Double Checks
    if (dice === 6 && last === 6) {
      score[active] = 0;
      document.getElementById('score-' + active).textContent = 0;
      switchActive();
    } else {
      last = dice;
      // 3. Update Round Score
      if (dice !== 1 && dices !== 1) {
        round += (dice + dices);
        document.getElementById('current-' + active).textContent = round;
      } else {
        switchActive();
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dices').style.display = 'none';
      }
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
  last = 0;

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dices').style.display = 'none';

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('active', 'winner');
  document.querySelector('.player-1-panel').classList.remove('active', 'winner');
  document.querySelector('.player-0-panel').classList.add('active');

  winScore = prompt('Enter the winning score : ');
}

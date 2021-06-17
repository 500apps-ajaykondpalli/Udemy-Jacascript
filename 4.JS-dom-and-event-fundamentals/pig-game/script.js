// selecting elements
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let btnRoll = document.querySelector('.btn--roll');

//starting conditions
let scores, playing, currentScore, activePlayer;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random number in dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.Displaying dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.checking if it is 1 . If yes, switch player
    if (dice != 1) {
      //add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //  If yes, switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if players score >=100
    //Fiish game

    if (scores[activePlayer] >= 20) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

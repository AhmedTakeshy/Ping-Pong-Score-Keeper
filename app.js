const p1 = {
  score: 0,
  button : document.querySelector('#p1Button'),
  display : document.querySelector('#right')
};

const p2 = {
  score: 0,
  button : document.querySelector('#p2Button'),
  display : document.querySelector('#left')
};

const resetButton = document.querySelector('#reset')
const winningScoreSelector = document.querySelector('#options');
let winningScore = 3;
let isGameOver = false;

function check(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  } player.display.textContent = player.score;
}

p1.button.addEventListener('click',() => {
  check(p1,p2);
})

p2.button.addEventListener('click',() => {
  check(p2,p1);
})

winningScoreSelector.addEventListener('change', () => {
  winningScore = parseInt(winningScoreSelector.value);
  reset();
})

resetButton.addEventListener('click',reset);

function reset() {
  isGameOver = false;
  for (let p of [p1,p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
    p.display.classList.remove('has-text-success','has-text-danger');
  }
}






// for (let i = 0; i < optsValue; i++){

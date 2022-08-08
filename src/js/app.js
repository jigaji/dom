/* eslint-disable no-plusplus */

const squares = document.querySelectorAll('.square');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;

export default function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('goblin');
  });
  const randomS = squares[Math.floor(Math.random() * 16)];
  randomS.classList.add('goblin');
  hitPosition = randomS.id;
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveGoblin() {
  setInterval(randomSquare, 500);
}

moveGoblin();

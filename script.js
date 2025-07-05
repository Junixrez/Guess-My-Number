'use strict';

const answer = Math.floor(Math.random() * 10) + 1;
console.log(answer);
let lives = 3;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess || guess < 1 || guess > 20) {
    document.querySelector(
      `.message`
    ).textContent = `please choose a number from 1 to 10`;
  } else if (guess === answer) {
    if (lives > 1) {
      document.querySelector(`.message`).textContent = `correct!!`;
      document.querySelector(`.secret-number`).textContent = answer;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `You lost press the Again! button to retry`;
    }
  } else if (guess > answer) {
    if (lives > 1) {
      document.querySelector(`.message`).textContent = `TOO HIGH`;
      lives--;
      document.querySelector(`.lives`).textContent = lives;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `You lost press the Again! button to retry`;
      //document.querySelector(`.check`).addEventListener(`click`, function () {});
      document.querySelector(`.label-score`).textContent = `💔 Lives: 0 `;
    }
  } else if (guess < answer) {
    if (lives > 1) {
      document.querySelector(`.message`).textContent = `TOO LOW`;
      lives--;
      document.querySelector(`.lives`).textContent = lives;
    } else {
      document.querySelector(`.label-score`).textContent = `💔 Lives: 0 `;
      document.querySelector(
        `.message`
      ).textContent = `You lost press the Again! button to retry`;
    }
  }
});
const restartButton = document.querySelector(`.btn`);
restartButton.addEventListener(`click`, () => {
  location.reload();
});

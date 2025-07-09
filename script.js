"use strict";

const secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);
let lives = 3;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const answer = Number(document.querySelector(`.guess`).value);

  if (!answer || answer < 1 || answer > 10) {
    document.querySelector(
      `.message`
    ).textContent = `please choose a number from 1 to 10`;
  } else if (answer === secretNumber) {
    if (lives > 0) {
      document.querySelector(`.message`).textContent = `correct!!`;
      document.querySelector(`.secret-number`).textContent = secretNumber;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `You lost press the Again! button to retry`;
    }
  } else if (answer > secretNumber) {
    if (lives > 0) {
      document.querySelector(`.message`).textContent = `TOO HIGH`;
      lives--;
      document.querySelector(`.lives`).textContent = lives;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `You lost press the Again! button to retry`;
      document.querySelector(`.check`).addEventListener(`click`, function () {
        document.querySelector(
          `.message`
        ).textContent = `Better luck next time`;
      });
      document.querySelector(`.label-score`).textContent = `💔 Lives: 0 `;
    }
  } else if (answer < secretNumber) {
    if (lives > 1) {
      document.querySelector(`.message`).textContent = `TOO LOW`;
      lives--;
      document.querySelector(`.lives`).textContent = lives;
    } else {
      document.querySelector(`.label-score`).textContent = `💔 Lives: 0 `;
      document.querySelector(
        `.message`
      ).textContent = `You lost press the Again! button to retry`;
      document.querySelector(`.check`).addEventListener(`click`, function () {
        document.querySelector(
          `.message`
        ).textContent = `Better luck next time`;
      });
    }
  }
});
const restartButton = document.querySelector(`.btn`);
restartButton.addEventListener(`click`, () => {
  location.reload();
});

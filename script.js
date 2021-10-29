/* Variables */
const secretNumber = Math.floor(Math.random() * 30 + 1);
console.log("secretNumber:", secretNumber);
const buttonCheck = document.querySelector(".button_check");
let livesCountTextContent = document.querySelector(".lives_count").textContent;
/* Score count variables*/
let score = 20;
document.querySelector(".lives_count").textContent = score;
/* Display message function */
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
/* Checking the guess number */
buttonCheck.addEventListener("click", function () {
  if (document.querySelector(".lives_count").textContent > 0) {
    if (document.querySelector(".input_number").value > secretNumber) {
      displayMessage("☝ too high!");
      document.querySelector(".input_number").value = "";
      score--;
      document.querySelector(".lives_count").textContent = score;
    } else if (document.querySelector(".input_number").value < secretNumber) {
      displayMessage("☝ too low!");
      document.querySelector(".input_number").value = "";
      score--;
      document.querySelector(".lives_count").textContent = score;
    } else {
      displayMessage("🎉 Congratulation");
      document.querySelector(".wrapper").style.backgroundColor = "purple";
      document.querySelector(".secret_number").textContent = secretNumber;
      document.querySelector(".input_number").value = "";
      document.querySelector(".highscore_count").textContent = score;
    }
  } else {
    displayMessage("😈 Game Over!");
  }
});
/* Restart */
const restart = document.querySelector(".restart_button");
restart.addEventListener("click", function () {
  document.querySelector(".wrapper").style.backgroundColor = "#630a10";
  document.querySelector(".secret_number").textContent = "?";
  displayMessage("🤡 Another one?");
  document.querySelector(".input_number").value = "";
  score = 20;
  document.querySelector(".lives_count").textContent = score;
});

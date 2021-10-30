/* Variables */
let secretNumber = Math.floor(Math.random() * 30 + 1);
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
      if(document.querySelector(".highscore_count").textContent < document.querySelector(".lives_count").textContent) {
        document.querySelector(".highscore_count").textContent 
        = document.querySelector(".lives_count").textContent;
      }
      
    }
  } else {
    displayMessage("😈 Game Over!");
  }
});
/* Restart */
const restart = document.querySelector(".restart_button");
restart.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 30 + 1)
  console.log("secretNumber:", secretNumber);
  document.querySelector(".wrapper").style.backgroundColor = "#630a10";
  document.querySelector(".secret_number").textContent = "?";
  displayMessage("🤡 Another one?");
  document.querySelector(".input_number").value = "";
  score = 20;
  document.querySelector(".lives_count").textContent = score;
});

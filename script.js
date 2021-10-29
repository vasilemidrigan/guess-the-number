/* Variables */
const secretNumber = Math.floor(Math.random() * 30 + 1);
const buttonCheck = document.querySelector(".button_check");
/* Score count variables*/
let score = 20;
document.querySelector(".lives_count").textContent = score;
/* Checking the guess number */
buttonCheck.addEventListener("click", function () {
  if (document.querySelector(".input_number").value > secretNumber) {
    document.querySelector(".message").textContent = "☝ too high!";
    document.querySelector(".input_number").value = "";
    score--;
    document.querySelector(".lives_count").textContent = score;
  } else if (document.querySelector(".input_number").value < secretNumber) {
    document.querySelector(".message").textContent = "☝ too low!";
    document.querySelector(".input_number").value = "";
    score--;
    document.querySelector(".lives_count").textContent = score;
  } else {
    document.querySelector(".message").textContent = "🎉 Congratulation";
    document.querySelector(".wrapper").style.backgroundColor = "purple";
    document.querySelector(".secret_number").textContent = secretNumber;
    document.querySelector(".input_number").value = "";
    document.querySelector(".highscore_count").textContent = score;
  }
});
/* Restart */
const restart = document.querySelector(".restart_button");
restart.addEventListener("click", function () {
  document.querySelector(".wrapper").style.backgroundColor = "#630a10";
  document.querySelector(".secret_number").textContent = "?";
  document.querySelector(".message").textContent = "🤡 Another one?";
  document.querySelector(".input_number").value = "";
  score = 20;
  document.querySelector(".lives_count").textContent = score;
});

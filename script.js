/* Variables */
const secretNumber = Math.floor(Math.random() * 30 + 1);
const buttonCheck = document.querySelector(".button_check");
const inputValue = document.querySelector(".input_number").value;
const message = document.querySelector(".message").textContent;

/* Checking the guess number */
buttonCheck.addEventListener("click", function () {
  if (document.querySelector(".input_number").value > secretNumber) {
    document.querySelector(".message").textContent = "☝ too high!";
  } else if (document.querySelector(".input_number").value < secretNumber) {
    document.querySelector(".message").textContent = "☝ too low!";
  } else {
    document.querySelector(".secret_number").textContent = "🎉 Congratulation";
  }
});

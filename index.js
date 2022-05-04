import {Word} from "./Word.js";
import {currentWord, alertBox, gameKeyboard} from "./currentgame.js";

//Keyboard
const keyboardSwitcher = document.querySelector("#keyboard-switch")
const keyboard = document.querySelector("#keyboard");
const keyboardSwitcherButton = document.querySelectorAll("#keyboard-switch a");

keyboardSwitcher.addEventListener("click", function(){
   keyboard.classList.toggle("qwerty");
   keyboardSwitcherButton.forEach((button) => button.classList.toggle("active"));
})
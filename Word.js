import { gameAlert } from "./currentgame.js";

// EVENTO DE INTERCEPTAÇÃO DE ERRO EM JAVASCRIPT

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {

    alert(`Error: ${errorMsg} \n
    Script: ${url} \n
    On Line: ${lineNumber} \n
    On Column: ${column} \n
    StackTrace: ${errorObj}`)

}

export class Word {

    constructor(word) {
        this.characters = word.split("");
        this.boxes = this.characters.map(char => {return "_"});
        this.mistakes = 0;
        this.corrects = 0;
        
        //Create boxes
        const currentWordDiv = document.querySelector("#current-word");
        currentWordDiv.innerHTML = "";
        this.boxes.forEach(box => {
            currentWordDiv.innerHTML += `<span class="letter"></span>`
        });
        
        this.currentWordSpaces = document.querySelectorAll("#current-word .letter")
        this.hangmanImg = document.querySelector("#hangman-image img");
        this.hangmanImg.src = `./assets/images/forca-${this.mistakes}.png`;
    }

    removeSpecials(texto) {
        texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
        texto = texto.replace(/[àáâãäå]/,"a");
        texto = texto.replace(/[ÈÉÊË]/,"E");
        texto = texto.replace(/[èéêë]/,"e");

        return texto.replace(/[^a-z0-9]/gi,''); 
    }

    checkCharacter(char, keyButton){
        let gotRight = false;
        for(let i = 0; i < this.boxes.length; i++) {

            if (char == this.removeSpecials(this.characters[i])) {
                if (char !== this.boxes[i]) {
                    this.corrects++
                }
                this.boxes[i] = char;
                this.currentWordSpaces[i].innerHTML = char;
                gotRight = true;
            }
        }

        if (keyButton.classList.contains("pressed") == false) {
            if (gotRight == false) {
                this.mistakes++
                this.hangmanImg.src = `./assets/images/forca-${this.mistakes}.png`;
            };

            keyButton.classList.add("pressed");
        }

        if (this.mistakes == 6) {
            gameAlert("Você perdeu! :(")
        } else {
            if (this.corrects == this.characters.length) {
                gameAlert("Você ganhou! :)")
            }
        }
    }
}

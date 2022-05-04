import {Word} from "./Word.js";

//New game
const newGameButton = document.querySelector("#new-game");
const themeSelector = document.querySelector("#theme-selector");

newGameButton.addEventListener("click", () => {themeSelector.classList.toggle("visible")})

// EVENTO DE INTERCEPTAÇÃO DE ERRO EM JAVASCRIPT

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {

    alert(`Error: ${errorMsg} \n
    Script: ${url} \n
    On Line: ${lineNumber} \n
    On Column: ${column} \n
    StackTrace: ${errorObj}`)

}

const listaFrutas = [
    "abacaxi",
    "laranja",
    "banana",
    "uva",
    "morango",
    "acerola",
    "abacate",
    "cacau",
    "caqui",
    "carambola"
];

const listaAnimais = [
    "cachorro",
    "elefante",
    "gato",
    "girafa",
    "coelho",
    "rato",
    "cobra",
    "camundongo",
    "tartaruga",
    "golfinho",
    "rinoceronte"
];

const listaCores = [
    "amarelo",
    "vermelho",
    "rosa",
    "verde",
    "azul",
    "roxo",
    "branco",
    "preto",
    "escarlate",
    "cinza",
    "ciano",
    "magenta"
];

const listaEsportes = [
    "futebol",
    "esgrima",
    "basquete",
    "boxe",
    "bocha",
    "ciclismo",
    "corrida",
    "golfe"
]

const listaPaises = [
    "alemanha",
    "argentina",
    // "austrália",
    "brasil",
    // "bolívia",
    "chile",
    // "canadá",
    "china",
    // "colômbia",
    "egito",
    "equador",
    "espanha",
    "estados unidos",
    "frança",
    // "grécia",
    "holanda",
    // "índia",
    "inglaterra",
    // "itália",
    // "japão",
    // "méxico",
    "peru",
    "portugal",
    // "rússia",
    "uruguai",
    "venezuela"
]

const listFruits = [
    "apple",
    "pear",
    "grape",
    "orange",
    "strawberry",
    "melon",
    "watermelon"
]

const listAnimals = [
    "dog",
    "cat",
    "mouse",
    "elephant",
    "snake",
    "rabbit",
    "bunny",
    "turtle",
    "turtoise",
    "dolphin"
]

const listColors = [
    "red",
    "green",
    "blue",
    "cyan",
    "magenta",
    "yellow",
    "black",
    "white",
    "gray",
    "pink",
    "orange",
    "purple"
]

const listSports = [
    "soccer",
    "fencing",
    "basketball",
    "boxing",
    "bocce",
    "cycling",
    "race",
    "golf"
]

const listCountries = [
    "germany",
    "argentina",
    "australia",
    "brazil",
    "bolivia",
    "chile",
    "canada",
    "china",
    "colombia",
    "egypt",
    "ecuador",
    "spain",
    "united states",
    "france",
    "greece",
    "netherlands",
    "india",
    "england",
    "italy",
    "japan",
    "mexico",
    "peru",
    "portugal",
    "russia",
    "uruguay",
    "venezuela"
]


let themeButtons = document.querySelectorAll(".theme");

const currentTheme = document.querySelector("#current-theme");

let currentWord;

const keys = document.querySelectorAll(".key");

themeButtons.forEach(function(theme){
    let themeList = eval(theme.dataset.theme);
    theme.addEventListener("click", function(){
        currentTheme.innerHTML = theme.innerHTML
        let newWord = themeList[Math.floor(Math.random() * themeList.length)];
        currentWord = new Word(newWord.toUpperCase());
        themeSelector.classList.remove("visible");
        alertBox.classList.remove("visible");
        gameKeyboard.classList.add("visible");
        keys.forEach(function(key) {
            key.classList.remove("pressed");
        })
    })
})

keys.forEach(function(key) {
    key.addEventListener("click", () => currentWord.checkCharacter(key.innerHTML, key))
})

const alertBox = document.querySelector("#alert-box");
const gameKeyboard = document.querySelector("#keyboard-container")

export function gameAlert(alertText) {
    alertBox.innerHTML = alertText;
    alertBox.classList.add("visible");
    gameKeyboard.classList.remove("visible");
}

export {currentWord, alertBox, gameKeyboard};
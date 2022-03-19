let numberOfClicks = 0;
const cardsSigns = ["circle", "cross"];
const cardsValues = ["O", "X"];
let cards = document.querySelectorAll("div");
cards = [...cards];
let whoseTurn = 0;
let tableOfValues = [
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"]
];
let numberOfMoves = 0;
let finishedGame = false;

const init = function() {
    cards.forEach(card => {
        card.classList.add("hidden")
        card.addEventListener("click", clickCard) //nasłuchuje na click i jak kliknie to wywoluje sie funkcja clickCard
    })
}

const clickCard = function() {
    let activeCard = this;
    activeCard.classList.remove("hidden");
    document.getElementById(activeCard.id).value = cardsValues[whoseTurn];
    cards[activeCard.id] = cardsValues[whoseTurn];
    document.getElementById(activeCard.id).innerHTML = cardsValues[whoseTurn];
    //document.body.innerHTML = cardsValues[whoseTurn];

    activeCard.classList.add(cardsSigns[whoseTurn]);
    this.removeEventListener("click", clickCard);
    //cards = cards.filter(card => card.classList.contains("hidden"));
    numberOfMoves = numberOfMoves + 1;
    console.log("kliknieta karta!");
    console.log("Id:");
    console.log(activeCard.id);
    console.log("Value:");
    console.log(cards[activeCard.id]);
    if (numberOfMoves >= 5) {
        checkIfGameIsFinished();
    }

    if (whoseTurn == 0) {
        whoseTurn = 1;
    } else {

        whoseTurn = 0;
    }
}

const checkIfGameIsFinished = function() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            tableOfValues[i, j] = document.getElementById(i * 3 + j).value;
            console.log(tableOfValues[i, j]);
        }
    }
    for (i = 0; i < 3; i++) {
        if (tableOfValues[0, i] === tableOfValues[1, i] && tableOfValues[0, i] === tableOfValues[2, i]) {
            console.log("koniec gry!");
            console.log(tableOfValues[0, i]);
            console.log(i);
            finishedGame = true;
            break;
        }
    }
    for (i = 0; i < 3; i++) {
        if (tableOfValues[i, 0] === tableOfValues[i, 1] && tableOfValues[i, 0] === tableOfValues[i, 2]) {
            console.log("koniec gry!");
            console.log(tableOfValues[i, 0]);
            finishedGame = true;
            console.log(i);
            break;
        }
    }
    if (tableOfValues[0, 0] === tableOfValues[1, 1] && tableOfValues[0, 0] === tableOfValues[2, 2]) {
        console.log("koniec gry!");
        console.log(tableOfValues[0, 0]);
        finishedGame = true;
    }
    if (tableOfValues[0, 2] === tableOfValues[1, 1] && tableOfValues[0, 2] === tableOfValues[2, 0]) {
        console.log("koniec gry!");
        console.log(tableOfValues[2, 0]);
        finishedGame = true;
    }
    if (finishedGame) {
        afterGame();
    }
}

const afterGame = function() {
    alert("Koniec gry, czy chcesz rozpocząć nową?");
    NowaGra();
}
const NowaGra = function() {
    location.reload();
}

init();
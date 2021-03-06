let numberOfClicks = 0;
const cardsSigns = ["circle", "cross"];
const cardsValues = ["O", "X"];
let cards = document.querySelectorAll("div");
cards = [...cards];
let whoseTurn = 0;
var tableOfValues;
let numberOfMoves = 0;
let finishedGame = false;
var ruch = 0; // 0 - nie ma ruchu, -1 krzyżyk, 1 kółko
const init = function() {
    cards.forEach(card => {
        card.classList.add("hidden")
        card.addEventListener("click", clickCard) //nasłuchuje na click i jak kliknie to wywoluje sie funkcja clickCard
    })
    tableOfValues = new Array(3);
    for (var i = 0; i < tableOfValues.length; i++) {
        tableOfValues[i] = new Array(tableOfValues.length);
        for (var x = 0; x < tableOfValues.length; x++)
            tableOfValues[i][x] = 0;
    }
}

const clickCard = function() {
    let activeCard = this;
    activeCard.classList.remove("hidden");
    document.getElementById(activeCard.id).innerHTML = cardsValues[whoseTurn];

    activeCard.classList.add(cardsSigns[whoseTurn]);
    this.removeEventListener("click", clickCard);
    numberOfMoves = numberOfMoves + 1;

    if (whoseTurn == 0) {
        ruch = 1;
        whoseTurn = 1;
    } else {
        whoseTurn = 0;
        ruch = -1;
    }
    addElementToTheTable(this);

    console.log("kliknieta karta!");
    console.log("Id:");
    console.log(activeCard.id);
    console.log("Value:");
    console.log(cards[activeCard.id]);
    if (numberOfMoves >= 5) {
        afterGame()
    }
}

const addElementToTheTable = function(karta) {
    if (karta.id < 3) {
        tableOfValues[0][karta.id] = ruch;
    } else if (karta.id < 6) {
        tableOfValues[1][karta.id - 3] = ruch;
    } else {
        tableOfValues[2][karta.id - 6] = ruch;
    }
}

const checkIfGameIsFinished = function() {
    for (var i = 0; i < 3; i++) {
        //Sprawdzam w poziomie
        if (Math.abs(tableOfValues[0][i] + tableOfValues[1][i] + tableOfValues[2][i]) == 3)
            return tableOfValues[0][i];
        //Sprawdzam w pionie
        if (Math.abs(tableOfValues[i][0] + tableOfValues[i][1] + tableOfValues[i][2]) == 3)
            return tableOfValues[i][0];
    }
    //Sprawdzam skosy
    if (Math.abs(tableOfValues[0][0] + tableOfValues[1][1] + tableOfValues[2][2]) == 3)
        return tableOfValues[0][0];
    if (Math.abs(tableOfValues[0][2] + tableOfValues[1][1] + tableOfValues[2][0]) == 3)
        return tableOfValues[0][2];
    //Sprawdzam czy remis
    if (numberOfMoves >= 9) {
        return -2;
    }
    return false;
}

const afterGame = function() {
    switch (checkIfGameIsFinished()) {
        case false:
            break;
        case -1:
            alert("Wygrał krzyżyk");
            NowaGra();
            break;
        case 1:
            alert("Wygrało kólko");
            NowaGra();
            break;
        case -2:
            alert("Remis");
            NowaGra();
            break;
    }
}
const NowaGra = function() {
    location.reload();
}

init();
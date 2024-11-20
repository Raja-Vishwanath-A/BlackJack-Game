let cards = [];
let sum = 0;
let haveBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el");

function startGame () {
    if ((isAlive === false) || haveBlackjack === true) {
        cards = [];
        sum=0;
        haveBlackjack = false;
        let firstCard = num1to13();
        let secondCard = num1to13();
        cards.push(firstCard);
        cards.push(secondCard);
        sum = sum + firstCard + secondCard;
    }
    isAlive = true;
    renderGame();
}

function renderGame() {
    
    cardsEl.textContent = "Cards : "

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum : " + sum;

    if (sum < 21) {
        message = "Do you want to pick another card?";
    } else if ( sum === 21) {
        message = "Congratulations! You have won BlackJack!";
        haveBlackjack = true;
    } else {
        message = "You have lost the Game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function num1to13() {
    let randNum = (Math.ceil(13*Math.random()));
    if (randNum === 1) {
        return 11;
    } else if (randNum > 10) {
        return 10;
    }else {
        return randNum;
    }
}


function newCard() {
    if (isAlive === true && haveBlackjack=== false) {
        let freshCard = num1to13();
        cards.push(freshCard);
        console.log(cards);
        sum = sum + freshCard;
        renderGame();
    }

}


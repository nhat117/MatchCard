//Create all of the card
const cardsDeck = [{
    name: "Fries",
    img: "src/images/fries.png"
}, {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png"
}, {
    name: "ice-cream",
    img: "src/images/fries.png"
}, {
    name: "hotdog",
    img: "src/images/hotdog.png"
}, {
    name: "pizza",
    img: "src/images/pizza.png"
}, {
    name: "milkshake",
    img: "src/images/milkshake.png"
}, {
    name: "Fries",
    img: "src/images/fries.png"
}, {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png"
}, {
    name: "ice-cream",
    img: "src/images/fries.png"
}, {
    name: "hotdog",
    img: "src/images/hotdog.png"
}, {
    name: "pizza",
    img: "src/images/pizza.png"
}, {
    name: "milkshake",
    img: "src/images/milkshake.png"
}]

//Shuffle the deck
cardsDeck.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid")
const res = document.querySelector("#result")
let cardChosen = []
let cardChosenIds = []
let cardWon = []

function createBoard() {
    for (let i = 0; i < cardsDeck.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'src/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}


function flipCard() {
    let cardID = this.getAttribute('data-id')
    cardChosen.push(cardsDeck[cardID].name)
    console.log(cardChosen)
    cardChosenIds.push(cardID)
    this.setAttribute('src', cardsDeck[cardID].img)
    if (cardChosen.length === 2) {
        setTimeout(isMatch, 500)
    }
}

function isMatch() {
    //Handle double click
    const cardDoc = document.querySelectorAll('img')
    const option1ID = cardChosenIds[0]
    const option2ID = cardChosenIds[1]
    if (option1ID == option2ID) {
        alert('You have select a card twice!!!')
        cardDoc[option1ID].setAttribute('src', 'src/images/blank.png')
        cardDoc[option2ID].setAttribute('src', 'src/images/blank.png')
    } else if (cardChosen[0] === cardChosen[1]) { //Match case
        cardDoc[option1ID].setAttribute('src', 'src/images/white.png')
        cardDoc[option2ID].setAttribute('src', 'src/images/white.png')
        cardDoc[option1ID].removeEventListener('click',flipCard)
        cardDoc[option2ID].removeEventListener('click',flipCard)
        cardWon.push(cardChosen)
    } else { //False  case
        cardDoc[option1ID].setAttribute('src', 'src/images/blank.png')
        cardDoc[option2ID].setAttribute('src', 'src/images/blank.png')
    }
    cardChosen = []
    cardChosenIds = []
    res.textContent = " " + cardWon.length
    if(cardWon.length === cardsDeck.length /2) {
         alert('Congratz !! You have won !!!!')
        window.location.reload(1);
    }
}

createBoard()
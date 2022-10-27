const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg',
    },
    {
        name: 'burger',
        img: 'images/burger.jpg',
    },
    {
        name: 'donut',
        img: 'images/donut.jpg',
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.jpg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg',
    },
    {
        name: 'salad',
        img: 'images/salad.jpg',
    },
    {
        name: 'fries',
        img: 'images/fries.jpg',
    },
    {
        name: 'burger',
        img: 'images/burger.jpg',
    },
    {
        name: 'donut',
        img: 'images/donut.jpg',
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.jpg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg',
    },
    {
        name: 'salad',
        img: 'images/salad.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/background.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);        
        gridDisplay.append(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img'); 
    const cardOne = cardsChosenIds[0];
    const cardTwo = cardsChosenIds[1];
    if(cardOne == cardTwo) {
        cards[cardOne].setAttribute('src', 'images/background.jpg');
        cards[cardTwo].setAttribute('src', 'images/background.jpg');
    }

    else if (cardsChosen[0] === cardsChosen[1]) {
        cards[cardOne].setAttribute('src', 'images/blank.jpg');
        cards[cardTwo].setAttribute('src', 'images/blank.jpg');
        cards[cardOne].removeEventListener('click', flipCard);
        cards[cardTwo].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
    } else {
        cards[cardOne].setAttribute('src', 'images/background.jpg');
        cards[cardTwo].setAttribute('src', 'images/background.jpg');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    console.log(cardsChosenIds)

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innterHTML = 'Congratulations! You have found them all'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout( checkMatch, 400 )
    }

    console.log(cardsChosen)
    console.log(cardsChosenIds)
}








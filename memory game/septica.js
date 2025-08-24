const cardArray = [
    {
        name:"tomioka",
        img:'poze/tomioka.png',
    },
    {
        name:"girl",
        img:'poze/girl.png',
    },
    {
        name:"woo",
        img:'poze/woo.png',
    },
    {
        name:"viora",
        img:'poze/vioara.png',
    },
    {
        name:"kanae",
        img:'poze/kanae.png',
    },
    {
        name:"gojo",
        img:'poze/gojo.png',
    },
     {
        name:"tomioka",
        img:'poze/tomioka.png',
    },
    {
        name:"girl",
        img:'poze/girl.png',
    },
    {
        name:"woo",
        img:'poze/woo.png',
    },
    {
        name:"viora",
        img:'poze/vioara.png',
    },
    {
        name:"kanae",
        img:'poze/kanae.png',
    },
    {
        name:"gojo",
        img:'poze/gojo.png',
    },
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay=document.querySelector('#grid')
const resultDisplay =document.querySelector('#result')

let cardChosen = []
let cardsChosenId = []
const cardsWon =[]

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'poze/negru.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

        


    }
    cardChosen =[]
    cardsChosenId=[]
}



createBoard()


function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
        alert('You clicked the same card!')
    } else if (cardChosen[0] === cardChosen[1]) {
        alert('You found a match !!! ❤️')

       
        cards[optionOneId].style.visibility = 'hidden'
        cards[optionTwoId].style.visibility = 'hidden'

        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon.push(1)
    } else {
        cards[optionOneId].setAttribute('src', 'poze/negru.png')
        cards[optionTwoId].setAttribute('src', 'poze/negru.png')
        alert('Damn, you missed 😞')
    }

    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardsChosenId = []

    if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = 'Ai castigat !!!! 🎉🎉🎉🎉🎉 poate nu dai de baut 🍺🍺🍺🍺🍺🍺';
    setTimeout(() => {
        alert('🎉🎉🎉🎉🎉🎉Ai castigat!!!!! Bravoooo ❤️❤️❤️❤️❤️❤️❤️');
    }, 500);
}

}



function flipCard () {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardArray[cardId])
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
    


   

}
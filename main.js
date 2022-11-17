// declaring variables
const timeCounter=document.querySelector('#timer');
const result=document.querySelector('#score');
const startButton=document.querySelector('#start');
const restartButton=document.querySelector('#restart');
const gameContainer=document.querySelector('#gameBox');
const gameCondition=document.querySelector('#gameCondition');
const box=document.querySelector('.pageSetup')
console.log(timeCounter.innerText);
let chosenCard=[]
let chosenCardId=[]
let chosenCardWon=[]


// console.log(timeCounter.textContent);
 // card images and names
 const cardType=[   { name: "v", img: "image/v.png"},
                    { name: "brown", img: "image/brown.png"},
                    { name: "chimmny", img: "image/chimmny.png"},
                    { name: "dino", img: "image/dino.png"},
                    { name: "jin", img: "image/jin.png"},
                    { name: "pink", img: "image/pink.png"},
                    { name: "rm", img: "image/rm.png"},
                    { name: "xo", img: "image/xo.png"},
                    { name: "v", img: "image/v.png"},
                    { name: "brown", img: "image/brown.png"},
                    { name: "chimmny", img: "image/chimmny.png"},
                    { name: "dino", img: "image/dino.png"},
                    { name: "jin", img: "image/jin.png"},
                    { name: "pink", img: "image/pink.png"},
                    { name: "rm", img: "image/rm.png"},
                    { name: "xo", img: "image/xo.png"},
                ];
// initialize the timer
const startMinutes=3;
let time=startMinutes*60;
setInterval(countdown, 2000);
function countdown(){
    let minutes =Math.floor(time/60);
    let seconds =time % 60;
    // seconds=seconds< 10 ? '0' + seconds : seconds
    timeCounter.innerHTML= '${minutes}:${seconds}';
    time--;
}
// sorting of card
cardType.sort(() => 0.5 - Math.random());


// Creating the box
function createBox(){
    for(let i=0; i<cardType.length; i++){
    const cardOne=document.createElement('img')
    cardOne.setAttribute('src','image/nature (1).png')
    cardOne.setAttribute('data-id', i)
    cardOne.addEventListener('click',flipCard)
    // console.log('This works!')
box.appendChild(cardOne)
    }
}
//createBox()
//Create a condition to enable card to flip
function flipCard() {
    const cardClass = this.getAttribute('data-id')
    chosenCard.push(cardType[cardClass].name)
    chosenCardId.push(cardClass)
    this.setAttribute('src',cardType[cardClass].img)
    if(chosenCard.length===2){
        setTimeout(checkMatch,200)
    }
 }
// create condition for checkMatch
function checkMatch(){
    let cardPictures= document.querySelectorAll('img')
    const firstId=chosenCardId[0];
    const secondtId=chosenCardId[1];
    if(chosenCard[0]===chosenCard[1]){
        alert('you found a match')
        cardPictures[firstId].setAttribute('src','image/Blue (1).png')
        cardPictures[secondtId].setAttribute('src','image/Blue (1).png')
        chosenCardWon.push(chosenCard)
    }else{
        cardPictures[firstId].setAttribute('src','image/nature (1).png')
        cardPictures[secondtId].setAttribute('src','image/nature (1).png')
        alert('try again')
    }
    chosenCard= []
    chosenCardId= []
    result.innerText=chosenCardWon.length
    if(chosenCardWon.length===cardType.length/2){
    result.innerText='You found all of them!'
    }
}
createBox()
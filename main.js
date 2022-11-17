// declaring variables
const timeCounter=document.querySelector('#timer');
const result=document.querySelector('#score');
const startButton=document.querySelector('#start');
const restartButton=document.querySelector('#restart');
const gameContainer=document.querySelector('#gameBox');
const gameCondition=document.querySelector('#gameCondition');
const box=document.querySelector('.pageSetup')
console.log(timeCounter.innerText);
const ChosenCard=[]
const ChosenCardId=[]
const ChosenCardWon=[]


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
// let seconds=0;
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
    for(let i=0; i<cardType.length;i++){
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
    ChosenCard.push(cardType[cardClass].name)
    ChosenCardId.push(cardClass)
    this.setAttribute('src',cardType[cardClass].img)
    if(ChosenCard.length===2){
        setTimeout(checkMatch,500)
    }
 }
// create condition for checkMatch
function checkMatch(){
    const cardPictures= document.querySelectorAll('img')
    let firstId=ChosenCardId[0];
    let secondtId=ChosenCardId[1];
    if(ChosenCardId[0]===ChosenCardId[1]){
        cardPictures[firstId].setAttribute('src','image/Blue (1).png')
        cardPictures[secondtId].setAttribute('src','image/Blue (1).png')
        ChosenCardWon.push(ChosenCardId)
    }else{
        cardPictures[firstId].setAttribute('src','image/nature (1).png')
        cardPictures[secondtId].setAttribute('src','image/nature (1).png')
    }
    // ChosenCard=[]
    // ChosenCardId=[]
    result.innerText=ChosenCardWon.length
    if(ChosenCardWon.length===cardType.length/2){
    result.innerText='You found all of them!'
    }
}
createBox()
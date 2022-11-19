// declaring variables
const timeCounter=document.querySelector('#timer');
const result=document.querySelector('#score');
const startButton=document.querySelector('#start');
const restartButton=document.querySelector('#restart');
const gameContainer=document.querySelector('#gameBox');
const gameCondition=document.querySelector('#gameCondition');
const box=document.querySelector('.pageSetup')
console.log(result.innerText);
let chosenCard=[]
let chosenCardId=[]
let chosenCardWon=[]
let currentSecond=0
let TimerId=null



// console.log(timeCounter.textContent);
 // card images and names
 const cardType=[   { name: "v", img: "Image1/v.png"},
                    { name: "brown", img: "Image1/brown.png"},
                    { name: "chimmny", img: "Image1/chimmny.png"},
                    { name: "dino", img: "Image1/dino.png"},
                    { name: "jin", img: "Image1/jin.png"},
                    { name: "pink", img: "Image1/pink.png"},
                    { name: "rm", img: "Image1/koya.png"},
                    { name: "xo", img: "Image1/xo.png"},
                    { name: "v", img: "Image1/v.png"},
                    { name: "brown", img: "Image1/brown.png"},
                    { name: "chimmny", img: "Image1/chimmny.png"},
                    { name: "dino", img: "Image1/dino.png"},
                    { name: "jin", img: "Image1/jin.png"},
                    { name: "pink", img: "Image1/pink.png"},
                    { name: "rm", img: "Image1/koya.png"},
                    { name: "xo", img: "Image1/xo.png"},
                ];
// // initialize the timer
let startMinutes=60;
    timeCounter.innerHTML= startMinutes;
    const decreamentTime=setInterval(()=>{
        startMinutes--
        timeCounter.innerHTML= startMinutes
        checkTime()
    }, 1000)
    const checkTime=()=>{
        if(startMinutes===0) 
        {clearInterval(decreamentTime)
            alert("game over")
            startButton.disabled=true;
        }
    }

// sorting of card
cardType.sort(() => 0.5 - Math.random());


// Creating the box
function createBox(){
    for(let i=0; i<cardType.length; i++){
    const cardOne=document.createElement('img')
    cardOne.setAttribute('src','Image1/bt21.png')
    cardOne.setAttribute('data-id', i)
    cardOne.addEventListener('click',flipCard)
    // console.log('This works!')
box.appendChild(cardOne)
    }
    return chosenCard;
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
 function removeFlipCard(){
    cardOne.removeEventListener('click',flipCard)
    box.appendChild(cardOne)
 }
// create condition for checkMatch
function checkMatch(){
    let cardPictures= document.querySelectorAll('img')
    const firstId=chosenCardId[0];
    const secondtId=chosenCardId[1];
    if(chosenCard[0]===chosenCard[1]){
        // alert('you found a match')
        cardPictures[firstId].setAttribute('src','Image1/bts.png')
        cardPictures[secondtId].setAttribute('src','Image1/bts.png')
        chosenCardWon.push(chosenCard)
    }else{
        cardPictures[firstId].setAttribute('src','Image1/bt21.png')
        cardPictures[secondtId].setAttribute('src','Image1/bt21.png')
        // alert('try again')
    }
    chosenCard= []
    chosenCardId= []
    result.innerText=chosenCardWon.length
    if(chosenCardWon.length===cardType.length/2){
    result.innerText='You found all of them!'
    }
}
createBox()
// addEventListener to start button
  //startButton.addEventListener('click',)
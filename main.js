// declaring variables
const timeCounter=document.querySelector('.timer');
const second=document.querySelector('#seconds');
const result=document.querySelector('#score');
const startButton=document.querySelector('#start-btn');
const restartButton=document.querySelector('#restart');
const gameContainer=document.querySelector('#gameBox');
const gameCondition=document.querySelector('#gameCondition');
const box=document.querySelector('.pageSetup');
const button=document.querySelector('.score');
// console.log(box.innerText);
let chosenCard=[]
let chosenCardId=[]
let chosenCardWon=[]
let decrementInterval
// addEventListener for the start game button
startButton.addEventListener('click',() => {
           startGame()
           startTimer()
 })
//  Assigning values for the startgame hide and display
function startGame(){
        console.log('pls');
        startButton.style.display='none';
        box.style.display='block';
        button.style.display='block';
        timeCounter.style.display='block';
                    }                    
// Declaring function for the timer
function startTimer(){
    let seconds=120;
    decrementInterval=setInterval(()=>{
    seconds--
    if(seconds>=0){
        second.innerHTML=seconds
    }else{
        gameOver()
         }
    },1000)
                     }
//  Declaring variable for win and end game
function gameOver(){
    timeCounter.innerText="The Game Is Over! Refresh To Try Again!"
                   }
function gameWin(){
    timeCounter.innerText="Congratulation! You have Found All Of Them"
                  }
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
// createBox()
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
        gameWin()
    // result.innerText='You found all of them!'
    }
    
}
createBox()

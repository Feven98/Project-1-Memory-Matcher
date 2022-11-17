// declaring variables
const time=document.querySelector('.timer');
const result=document.querySelector('#score');
const startButton=document.querySelector('#start');
const restartButton=document.querySelector('#restart');
const gameContainer=document.querySelector('#gameBox');
const gameCondition=document.querySelector('#gameCondition');
let game={
    action:{
        cards,
        interval,
        firstCard:false,
        secondCard:false,
     },
 }
 // card images and names
 const cardType=[   { name: "v", image: "v.png"},
                    { name: "brown", image: "brown.png"},
                    { name: "chimmny", image: "chimmny.png"},
                    { name: "dino", image: "dino.png"},
                    { name: "jin", image: "jin.png"},
                    { name: "pink", image: "pink.png"},
                    { name: "rm", image: "rm.png"},
                    { name: "xo", image: "xo.png"}
                ];
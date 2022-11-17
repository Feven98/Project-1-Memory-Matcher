// declaring variables
const timeCounter=document.querySelector('#timer');
const result=document.querySelector('#score');
const startButton=document.querySelector('#start');
const restartButton=document.querySelector('#restart');
const gameContainer=document.querySelector('#gameBox');
const gameCondition=document.querySelector('#gameCondition');
const box=document.querySelector('.pageSetup')
console.log(timeCounter.innerText);
// console.log(timeCounter.textContent);
// let game={
//     action :{
//         card,
//         interval,
//         firstCard:false,
//         secondCard:false,
//      },
// }
 // card images and names
 const cardType=[   { name: "v", image: "v.png"},
                    { name: "brown", image: "brown.png"},
                    { name: "chimmny", image: "chimmny.png"},
                    { name: "dino", image: "dino.png"},
                    { name: "jin", image: "jin.png"},
                    { name: "pink", image: "pink.png"},
                    { name: "rm", image: "rm.png"},
                    { name: "xo", image: "xo.png"},
                    { name: "v", image: "v.png"},
                    { name: "brown", image: "brown.png"},
                    { name: "chimmny", image: "chimmny.png"},
                    { name: "dino", image: "dino.png"},
                    { name: "jin", image: "jin.png"},
                    { name: "pink", image: "pink.png"},
                    { name: "rm", image: "rm.png"},
                    { name: "xo", image: "xo.png"},
                ];
// initialize the timer
const startMinutes=10;
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
// let minutes=0;
// let seconds=0;
// const countdown=()=>{
//     seconds +=1;
//     if(seconds>=60){
//         minutes+=1;
//         seconds=0;
//     }

// };


// Creating the box
function createBoard(){
    for(let i=0; i<cardType.length;i++){
    const cardone=document.createElement('img')
    cardone.setAttribute('src','image/nature (1).png')
    cardone.setAttribute('data-id', i)
box.appendChild(cardone)
    }
}
createBoard()
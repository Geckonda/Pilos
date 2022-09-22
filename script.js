
const gameField = document.querySelector(".gameField");
const gameDesk = document.querySelector(".gameDesk")
const whiteBallsbar = document.querySelector("#whiteBallsbar");
const blackBallsBar = document.querySelector("#blackBallsBar");
const ballsBar = document.querySelector(".ballsBarContainer");
const switcher = document.querySelectorAll(".switcher")


//Global variables
var whiteAmmount = 14;
var blackAmount = 14;
var oddTurn = true;



for(let i = 0; i < 15; i++){
    BlockCreation(i, "whiteBall", whiteBallsbar);
    BlockCreation(i, "blackBall", blackBallsBar);
}

for(let i = 0; i < 16; i++){
    BlockCreation(i, "ballPlaceholder", gameField)
}

function BlockCreation(i, className, parent){
    const newDiv = document.createElement("div");
    newDiv.classList.add(className);
    newDiv.id = className + i;
    parent.appendChild(newDiv);
}

// gameField.addEventListener("click", function(e){
//     let target = e.target.closest('.ballPlaceholder');
//     if(!target || target.className == "ballPlaceholder active") return;
//     PutBall(target);
//     target.classList.add("active");
// })

const whiteBalls = document.querySelectorAll(".whiteBall")
const blackBalls = document.querySelectorAll(".blackBall")

    blackBalls.forEach(function(item){
        item.classList.add("balls")
    })
    whiteBalls.forEach(function(item){
        item.classList.add("balls")
    })
//Бар шариков
ballsBar.addEventListener("click", (e) =>{
    let target = e.target.closest('button');
    if(!target)return;
    oddTurn = !oddTurn;
    Turn();
})
gameDesk.addEventListener("click", (e) =>{
    let target = e.target.closest('.gameDesk');
    var domRect = target.getBoundingClientRect();
    // let x = domRect.left;
    // let y = domRect.top;
    // let w = domRect.width;
    // let h = domRect.height;
    // console.log(domRect);
    PutBall(e.clientX - domRect.x, e.clientY - domRect.y, oddTurn);
})
gameDesk.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let target = e.target.closest('.balls');
    if(!target)return;
    target.remove();
    console.log(target.className);
    if(target.className === "whiteBallActive balls"){
        oddTurn = true;
        Turn()
    }
    if(target.className === "blackBallActive balls"){
        oddTurn = false;
        Turn()
    }
    });

function PutBall(x,y,turn){
    const newDiv = document.createElement("div");
    if(oddTurn)
        newDiv.classList.add("whiteBallActive");
    else
        newDiv.classList.add("blackBallActive");
    newDiv.classList.add("balls");
    gameDesk.appendChild(newDiv);
    newDiv.style.top = y + "px";
    newDiv.style.left = x + "px"
    oddTurn = !oddTurn;
    Turn();
}

function Turn(){
    if(!oddTurn){
        blackBallsBar.style.border = "5px solid black"
        whiteBallsbar.style.border = "5px solid transparent"
    }
    else{
        whiteBallsbar.style.border = "5px solid black"
        blackBallsBar.style.border = "5px solid transparent"
    }
}
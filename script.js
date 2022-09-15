
const gameField = document.querySelector(".gameField");
const whiteBallsbar = document.querySelector("#whiteBallsbar");
const blackBallsBar = document.querySelector("#blackBallsBar");



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

gameField.addEventListener("click", function(e){
    let target = e.target.closest('.ballPlaceholder');
    if(!target || target.className == "ballPlaceholder active") return;
    PutBall(target);
    target.classList.add("active");
})

function PutBall(placeHolder){
    let amount
    let className;
    if(oddTurn){
        amount = whiteAmmount;
        className  = "whiteBallActive";
        whiteAmmount--;
    }
    else{
        amount = blackAmount;
        className = "blackBallActive";
        blackAmount--;
    }
    EraseBall(amount)
    BlockCreation(amount,className, placeHolder)

    oddTurn = !oddTurn;
}
function EraseBall(amount){
    console.log(amount);
    if(oddTurn)document.getElementById("whiteBall"+amount).remove();
    else document.getElementById(`blackBall${amount}`).remove();

}
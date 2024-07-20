let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let winMsg = document.querySelector("#winMsg");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disableBox=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

let boxVal = true;
let cnt=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(boxVal){
            boxVal = false;
            box.innerText = 'O';
        }
        else{
            boxVal = true;
            box.innerText = 'X';
        }
        box.disabled = true;
        cnt++;
        let isWinnerVal = isWinner();

        if(cnt==9 && !isWinnerVal){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    winMsg.innerText=`Game was a Draw.`;
    msg.classList.remove("hide");
    disableBox();
}

const showWinner=(winner)=>{
    winMsg.innerText = `Congratulations! The winner is ${winner}`;
    msg.classList.remove("hide");
    disableBox();
    
};
const isWinner =() =>{
    for(let pattern of winPatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1===p2 && p2===p3){
                console.log("winner");
                showWinner(p1);
                return true;
            }
        }
    }
};

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    boxVal=true;
    msg.classList.add("hide");
    cnt=0;
}

newGame.addEventListener("click",enableBox);
reset.addEventListener("click",enableBox);
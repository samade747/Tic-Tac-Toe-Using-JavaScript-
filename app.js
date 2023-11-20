let turn = 'X'
let gameover 
let reset = document.getElementById('reset');

let changeTurn = ()=>{
    return turn === 'X' ? '0' : 'X'
}


// function for check if a win
let checkWin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    
    for (let win of wins){
        if((boxtexts[win[0]].innerText === boxtexts[win[1]].innerText) &&
          (boxtexts[win[2]].innerText === boxtexts[win[1]].innerText) &&
          (boxtexts[win[0]].innerText !== '')){
            let winner = boxtexts[win[0]].innerText;
            document.querySelector('.info').innerText = winner + 'won';
            gameover = true;
            setTimeout(resetGame, 3000);
            return;
        }
    }
}


// Game Logic 

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{ 
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover){
            document.getElementsByClassName('turn')[0].innerText = 'Turn for' + turn;
            }
        }
    });
});

// onlick adding listner for reset button
reset.addEventListener('click', resetGame);

function resetGame(){
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = 'X';
    gameover = false;
    document.querySelector('.info').innerText = 'playagain';
    document.querySelector('turn').innerText = 'Turn for' + turn;
};
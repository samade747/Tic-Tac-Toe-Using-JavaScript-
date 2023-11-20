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
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + 'won';
            gameover = true
        }
    })
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
reset.addEventListener('clicl', ()=> {
    let boxtexts = element.querySelector('reset');
    Array.from(boxtexts).forEach(element =>{
     element.innerText = ''
    })
}
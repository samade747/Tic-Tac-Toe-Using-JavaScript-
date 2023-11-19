let turn = 'X'

let changeTurn = ()=>{
    return turn === 'X' ? '0' : 'X'
}

// function for check if a win
let checkWin = () =>{
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

    ]
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
            document.getElementsByClassName('turn')[0].innerText = 'Turn for' + turn;
        }
    });
});
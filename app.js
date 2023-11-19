let turn = 'X'

let changeTurn = ()=>{
    return turn === 'X' ? '0' : 'X'
}

// function for check if a win
let checkWin = () =>{

}

// Game Logic 

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{ 
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            document.getElementsByClassName('turn')[0].innerText = 'Turn for' + turn;
        }
    });
});
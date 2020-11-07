// console.log('Esta funcionando')

let board = [];


function play(clickedId) {
   const playerSpan = document.getElementById('player')
   const clickedElement = document.getElementById(clickedId)
   if(playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = `X`
        board[clickedId] = 'X'
   } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = `O`
        board[clickedId] = 'O'
   }
   console.log(board)

   const topLeft = board[0]
   const topCenter = board[1]
   const topRigth = board[2]
   const centerLeft = board[3]
   const centerCenter = board[4]
   const centerRigth = board[5]
   const bottomLeft = board[6]
   const bottomCenter = board[7]
   const bottomRigth = board[8]

   if(topLeft !== undefined && topLeft === topCenter && topLeft === topRigth) {
       alert(`${topLeft} is the winner`)
    }
    if(topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`)
    }
    if(topLeft !== undefined && topLeft === centerCenter && topLeft === bottomRigth) {
        alert(`${topLeft} is the winner`)
    }
    if(centerLeft !== undefined && centerLeft === centerCenter && centerLeft === centerRigth) {
        alert(`${centerLeft} is the winner`)
    }
    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRigth) {
        alert(`${bottomLeft} is the winner`)    
    }
    if(topCenter !== undefined && topCenter === centerCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`)
    }
    if(topRigth !== undefined && topRigth === centerRigth && topRigth === bottomRigth) {
        alert(`${topRigth} is the winner`)
    }
    if(bottomLeft !== undefined && bottomLeft === centerCenter && bottomLeft === topRigth) {
        alert(`${bottomLeft} is the winner`)
    }
}


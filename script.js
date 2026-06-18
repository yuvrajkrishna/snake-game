const board = document.querySelector('.board')
const blockHeight = 50
const blockWidth = 50
let cols = Math.floor(board.clientWidth/blockWidth)
let rows = Math.floor(board.clientHeight/blockHeight)

const blocks = []

for(let row = 0 ; row < rows ;  row++){
    for(let col = 0 ; col < cols ; col++){
        let block = document.createElement('div')
        block.classList.add('blocks')
        board.appendChild(block)
        blocks[`${row}-${col}`] = block;
        block.innerText = [`${row}-${col}`];
    }
}

let snake = [{x:2,y:3}]

snake.forEach(element=>{
    blocks[`${element.x}-${element.y}`].classList.add('fill')
})
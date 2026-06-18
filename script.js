const board = document.querySelector('.board')
const blockHeight = 40
const blockWidth = 40
let cols = Math.floor(board.clientWidth/blockWidth)
let rows = Math.floor(board.clientHeight/blockHeight)

for(let i = 0 ; i < rows ;  i++){
    for(let j = 0 ; j < cols ; j++){
        let blocks = document.createElement('div')
        blocks.classList.add('blocks')
        board.appendChild(blocks)
    }
}
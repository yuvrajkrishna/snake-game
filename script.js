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
let direction = "down"


setInterval(() => {
   let head = null
   if(direction === "down"){
    head = {x:snake[0].x+1,y:snake[0].y}
   }
   else if(direction === "up"){
    head = {x:snake[0].x-1,y:snake[0].y}
   }
   else if(direction === "left"){
    head = {x:snake[0].x,y:snake[0].y-1}
   }
   else if(direction === "right"){
    head = {x:snake[0].x,y:snake[0].y+1}
   }

   snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })

    snake.unshift(head)
    snake.pop()

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add('fill')
    })
 }, 400);


window.addEventListener("keydown",function(elem){
    if(elem.key === "ArrowUp"){
        direction = "up"
    }
    else if(elem.key === "ArrowDown"){
        direction = "down"
    }
    else if(elem.key === "ArrowLeft"){
        direction = "left"
    }
    else if(elem.key === "ArrowRight"){
        direction = "right"
    }
})


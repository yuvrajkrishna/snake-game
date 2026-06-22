const board = document.querySelector('.board')
const blockHeight = 50
const blockWidth = 50
let score = document.querySelector('#score')
let highScore = document.querySelector('#high-score')
let highScoreElem = Number(localStorage.getItem("highScore")) || 0;
let scoreElem = 0 
let cols = Math.floor(board.clientWidth/blockWidth)
let rows = Math.floor(board.clientHeight/blockHeight)

highScore.textContent = highScoreElem;
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

let food = [
    {
        x : Math.floor(Math.random()*rows),
        y : Math.floor(Math.random()*cols)
    }
]

console.log(food[0])

function drawSnake(){
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add('fill')
    })
}

setInterval(() => {
   let head = null

 
    // food creation
   food.forEach(item=>{
    blocks[`${item.x}-${item.y}`].classList.add('food')
   })

    // movement and locomotion
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


    // border-collision-detection 
   if(head.x < 0 || head.y < 0 || head.x > rows || head.y > cols){
    alert("Game Over")
   }

    // update the current location and to provide snake movement
   snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })
    snake.unshift(head)
    snake.pop()
    drawSnake()

    // check if snake had eaten the food or not 
    if(food[0].x === snake[0].x && food[0].y === snake[0].y){
        scoreElem+=10
        score.textContent = scoreElem
        if(scoreElem > highScoreElem){
            highScoreElem = scoreElem
            localStorage.setItem("highScore", highScoreElem);
        }
        highScore.textContent = highScoreElem
        food.forEach(item=>{
            blocks[`${item.x}-${item.y}`].classList.remove('food')
        })
        food.pop()
        food = [
    {
        x : Math.floor(Math.random()*rows),
        y : Math.floor(Math.random()*cols)
    }
]
    }
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


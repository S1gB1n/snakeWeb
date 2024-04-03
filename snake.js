
//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeSize = 3;
var snakeBody = [[10,10],[9,10],[8,10]];

//food
var foodX;
var foodY;

var gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/10); //100 milliseconds
}

function update(){
    //is it game over

    //draw the board
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    //draw the food
    context.fillStyle="red";
    context.fillRect(foodX*blockSize, foodY*blockSize, blockSize, blockSize);

    //draw the snake
    //snake head from [10,10] and tail[10-3, 10] 
    context.fillStyle="green";
    for(let i = 0; i < snakeSize; i++){
        context.fillRect(snakeBody[i][0]*blockSize, snakeBody[i][1]*blockSize, blockSize, blockSize);
    }
    //snake movement
    if(velocityX != 0 || velocityY != 0){
        for(let i = 1; i < snakeSize; i++){
            snakeBody[i][0] = snakeBody[i-1][0];
            snakeBody[i][1] = snakeBody[i-1][1];
        }
    }
    snakeBody[0][0] += velocityX;
    snakeBody[0][1] += velocityY;
    



}

function changeDirection(e){
    if(e.code == "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }

    if(e.code == "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }

    if(e.code == "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }

    if(e.code == "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }
}

function placeFood() {
    foodX = 15;
    foodY = 15;
}
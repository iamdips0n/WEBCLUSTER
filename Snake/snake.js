// board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake
var headX = blockSize * 5;
var headY = blockSize * 5;
//speed
var speedX = 0;
var speedY = 0;

var body = [];

//points
var pointX;
var pointY;

var gameOver = false;


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");  // Drawing

    locatepoints();
    document.addEventListener("keyup", move);

   //update
   setInterval(update, 1000/10)
}

function update() {
    if (gameOver) {
        return;
    }
    
    
    context.fillStyle="navy";
    context.fillRect(0, 0, board.width, board.height);

     //points
    context.fillStyle="gold";
    context.fillRect(pointX, pointY, blockSize, blockSize);

    if (headX == pointX && headY == pointY) {
        body.push([pointX, pointY])
        locatepoints();
    }

    for (let i = body.length-1; i > 0; i--) {
        body[i] = body[i-1];
    }
    if (body.length) {
        body[0] = [headX, headY]
    }

    //snake
    context.fillStyle="green";
    headX += speedX * blockSize;
    headY += speedY * blockSize;
    context.fillRect(headX, headY, blockSize, blockSize);
    for (let i = 0; i < body.length; i++)
        context.fillRect(body[i][0], body[i][1], blockSize, blockSize);

    if (headX < 0 || headX >= cols*blockSize || headY < 0 || headY >= rows*blockSize) {
        gameOver = true;
    }

    for (let i = 0; i < body.length; i++) {
        if (headX == body[i][0] && headY == body[i][1]) {
            gameOver = true;
        }
    }
    //GameOver Text
if (gameOver) {
    context.textAlign = "center";
        context.fillStyle = "#FF0000";
        context.font = "20px 'Comic Relief', monospace";
        context.fillText("Game Over!", (board.width / 2), (board.height / 2));

        //gameover scores
        context.fillStyle = "#0BFF03";
        context.font = "20px 'Cosmic Relief', monospace";
        context.fillText("Score : " + body.length, (board.width / 2), (board.height / 2) + 25);

        // Restart the game
         context.fillStyle = "#FFFFFF";
        context.font = "20px 'Cosmic Relief', monospace";
        context.fillText("Press Space to Play Again!", (board.width / 2), (board.height / 2) - 20);
    }

}


window.addEventListener('keydown', m); {
    if (m.key === "Enter") {
        startGame();
    } 
}

function move(m) {
    //Restart The Game 
    if (gameOver && m.code == "Space") {
        restart();
        return;
    }
    if (m.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    }
   else if (m.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    }
   else if (m.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    }
  else if (m.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

function locatepoints() {
    pointX = Math.floor(Math.random() * cols) * blockSize;
    pointY = Math.floor(Math.random() * rows) * blockSize;
}

//Restart
function restart() {
    headX = blockSize * 5;
    headY = blockSize * 5;
    speedX = 0;
    speedY = 0;
    body = [];
    gameOver = false;
    locatepoints();
}
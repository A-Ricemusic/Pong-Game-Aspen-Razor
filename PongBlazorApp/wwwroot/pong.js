var canvas = document.getElementById('pongCanvas');
var ctx = canvas.getContext('2d');

function drawPaddle(x, y, width, height) {
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(x, y, width, height);
}

function drawBall(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

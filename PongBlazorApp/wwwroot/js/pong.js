window.clearCanvas = function () {
    var canvas = document.getElementById('pongCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.drawPaddle = function (x, y, width, height) {
    var canvas = document.getElementById('pongCanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(x, y, width, height);
};

window.drawBall = function (x, y, radius) {
    var canvas = document.getElementById('pongCanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

window.setFocus = function (elementId) {
    document.getElementById(elementId).focus();
};


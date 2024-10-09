window.clearCanvas = function () {
    var canvas = document.getElementById('pongCanvas');
    if (canvas) {
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            console.error('2D context not available on canvas.');
        }
    } else {
        console.error('Canvas element not found.');
    }
};

window.drawPaddle = function (x, y, width, height) {
    var canvas = document.getElementById('pongCanvas');
    if (canvas) {
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = "#0095DD"; // Paddle color
            ctx.fillRect(x, y, width, height);
        } else {
            console.error('2D context not available on canvas.');
        }
    } else {
        console.error('Canvas element not found.');
    }
};

window.drawBall = function (x, y, radius) {
    var canvas = document.getElementById('pongCanvas');
    if (canvas) {
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD"; // Ball color
            ctx.fill();
            ctx.closePath();
        } else {
            console.error('2D context not available on canvas.');
        }
    } else {
        console.error('Canvas element not found.');
    }
};

window.setFocus = function (elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.focus();
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
};

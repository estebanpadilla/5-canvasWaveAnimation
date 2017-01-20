/*
1. Use sin wave to animate.
sin 0                   = 0
sin 90      PI/2        = 1
sin 180     PI          = 0
sin 270     PI * 1.5    = -1
sin 360     PI * 2      = 0 
* */

window.addEventListener('load', init, false);

function init() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d');

    let ball = new Ball(0, height / 2, 2, '#00adef', context);
    ball.update();

    /*
    for (var angle = 0; angle < (Math.PI * 2); angle += 0.1) {
        console.log('------------------------------------------');
        console.log('sin: ' + Math.sin(angle));
        console.log('Radians: ' + angle);
        console.log('Degrees: ' + Math.floor(angle / Math.PI * 180));
    }
    */

    //Show image with the sin function
    var angle = 0;
    var angleIncrement = 0.02;
    var amplitude = 200;
    let xIncrement = 2;
    var ox = ball.x;
    var oy = ball.y;

    var waveLength = (((Math.PI * 2) / angleIncrement) * xIncrement);
    console.log(waveLength);

    drawUI();

    function update() {

        context.clearRect(0, 0, width, height);

        ball.y = oy + (Math.sin(angle) * amplitude);
        ball.x += xIncrement;
        angle += angleIncrement;

        if (ball.x > width) {
            ball.x = 0;
            angle = 0;
            context.clearRect(0, 0, width, height);
            drawUI();
        }

        if (ball.y > height) {
            oy = 0;
            ball.y = 0;
            angle = 0;
        }

        ball.update();

        requestAnimationFrame(update);
    }

    update();

    function drawUI() {
        context.fillStyle = '#ee3344';
        context.beginPath();
        context.fillRect(0, ((height / 2) - amplitude), waveLength, (amplitude * 2));
        context.fill()
        context.closePath();

        context.beginPath();
        context.strokeStyle = 'yellow';
        context.moveTo(0, height / 2);
        context.lineTo(width, height / 2)
        context.stroke();
        context.closePath();

        context.beginPath();
        context.strokeStyle = 'white';
        context.moveTo(0, ((height / 2) - amplitude));
        context.lineTo(width, ((height / 2) - amplitude));
        context.stroke();
        context.closePath();

        context.beginPath();
        context.strokeStyle = 'white';
        context.moveTo(0, ((height / 2) + amplitude));
        context.lineTo(width, ((height / 2) + amplitude));
        context.stroke();
        context.closePath();
    }
}

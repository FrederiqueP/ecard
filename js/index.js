
const canvas = document.getElementById('my-canvas');

// canvas 2D context
const ctx = canvas.getContext('2d');

// dernière position connue
let pos = { x: 0, y: 0 };

// couleur ligne par defaut
let currentColor = '#c0392b';


canvas.addEventListener('mousemove', drawline);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);


// nouvelle position à partir de l'événement de la souris
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }
  

function drawline(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
}



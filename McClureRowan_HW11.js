let playerX = 50;
let playerY = 200;
let playerSize = 20;
let speed = 3;

// moving obstacle
let obs1 = { x: 100, y: 100, w: 40, h: 40, dx: 2, dy: 1.5, c: [255, 0, 0] };
let obs2 = { x: 300, y: 300, w: 60, h: 30, dx: -1.5, dy: 2, c: [0, 0, 255] };

// mouse obstacle
let mouseObs = null;

// exit
let exitX = 360;
let exitY = 180;
let exitW = 30;
let exitH = 40;

let win = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // --- PLAYER MOVEMENT ---
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerX += speed;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY -= speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    playerY += speed;
  }

  //player
  fill(0, 200, 100);
  ellipse(playerX, playerY, playerSize);

  // move obs 
  moveObstacle(obs1);
  moveObstacle(obs2);

  drawObstacle(obs1);
  drawObstacle(obs2);

  // mouse obs
  if (mouseObs !== null) {
    fill(150);
    rect(mouseObs.x, mouseObs.y, mouseObs.w, mouseObs.h);
  }

  // exit
  fill(255, 200, 0);
  rect(exitX, exitY, exitW, exitH);

  // win
  if (
    playerX > exitX &&
    playerX < exitX + exitW &&
    playerY > exitY &&
    playerY < exitY + exitH
  ) {
    win = true;
  }

  // message
  if (win) {
    fill(0);
    textSize(24);
    textAlign(CENTER);
    text("YOU WIN!", width / 2, height / 2);
  } else {
    fill(0);
    textSize(12);
    text("Reach the yellow exit!", 200, 20);
  }
}

// functions

function moveObstacle(o) {
  o.x += o.dx;
  o.y += o.dy;

  // wrap around
  if (o.x > width) {
    o.x = 0;
  } else if (o.x < 0) {
    o.x = width;
  }

  if (o.y > height) {
    o.y = 0;
  } else if (o.y < 0) {
    o.y = height;
  }
}

function drawObstacle(o) {
  fill(o.c[0], o.c[1], o.c[2]);
  rect(o.x, o.y, o.w, o.h);
}
// mouse click
function 
 mousePressed() {
  if (mouseObs === null) {
    mouseObs = {
      x: mouseX,
      y: mouseY,
      w: 50,
      h: 50
    };
  }
}
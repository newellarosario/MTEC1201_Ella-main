
let x = 0;
let y = 300;

let speed = 5;

let r; 
let g;
let b;

function setup() {
  createCanvas(600, 600);
  r = 10;
  g = 50;
  b = 150;
}

function draw() {
  background(220);
  fill(r, g, b);


  //if x is hitting either edge, swap its direction
  // || = OR operator, && AND operator
  if (x > 600 || x < 0) {
    speed = -1 * random (0.5, 1.5);

    if (speed > 10 || x < 0 ) {
      speed = 1;
    }
  
  }
  if (keyIsPressed) {
    r = random(225);
    g = random(225);
    b = random(225);
  }
  x = x + speed;
  ellipse (x,y,100);
}

function mousePressed() {
  x = 0;
}

function keyPressed() {
  r = random(225);
  g = random(225);
  b = random(225);
}

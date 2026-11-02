//CREATING VARIABLES - Global Scope outside of the function, can be used anywhere in the code
let x = 0; //x position of the circle
let y = 0; //y position of the circle

function setup() {
  createCanvas(600, 600);
  /* LOCAL SCOPE -- inside the function
  let x = 600;
  let y = 0; */
}

function draw() {
  //blue circle
  background(220);
  fill(0, 0, 255);
  circle (x, y, 50);
  x++; //same as x = x + 1 OR x += 1 //x position of the circle increases by 1, moves the circle diagonally down and to the right
  y++; //same as y = y + 1 OR y += 1 //y position of the circle increases by 1, moves the circle diagonally down and to the right

  //USING MATHEMATIC OPERATIONS 
  //x = x + 1;
  //y = y + 1;

  //MULTIPLICATION AND DIVISION
  // y = y * 2; 
  // y = y / 2;

  //BUILT-IN VARIABLES
  //line(pmouseX, pmouseY, mouseX, mouseY); allows you to draw a line w the mouse
}
//make the background reset when you click the mouse
/*function mousePressed() {
  background(220);
} */
function mousePressed() {
  y = 0;
  x = 0;
}
/* function keyPressed() {
  y = 600;
} */
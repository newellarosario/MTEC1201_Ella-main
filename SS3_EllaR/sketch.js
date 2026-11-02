/* Ella R. "A day at the beach" 
 10/13 - In this sketch, the user is able to switch between day and night by either pressing 'n' for night and 'd' for day. 
 Once the code starts running, it'll randomly start off as either day or night. Once the sun/moon reaches the top right of the canvas, then it will restart to the bottom left of the canvas.
  
*/

let x = 0 
let y = 500
//sets color for the background

let r;
let g;
let b;

//sets color for the circle
let rCircle;
let gCircle;
let bCircle;

//decide whether it is day or night at the start of the sketch

let dayOrNight;

function setup() {
  createCanvas(700, 700);
  dayOrNight = random (0,1);

  //starts off randomly between day and night

//day colors
  if (dayOrNight >= 0.5) {
  r = 90;
  g = 115;
  b = 255;
  //sun colors
  rCircle = 255;
  gCircle = 225;
  bCircle = 90;
  }
  else {
  r = 10;
  g = 10;
  b = 110;
  //moon colors
  rCircle = 190;
  gCircle = 190;
  bCircle = 200;
}
}

function draw() {
  background(r, g, b);
  
  //sun moves diagonally up and to the right
  fill(rCircle, gCircle, bCircle);
  strokeWeight(2);
  circle(x, y, 200);
  x = x + 3;
  y = y - 3;

  //sun resets to the bottom of the screen once it reaches the top right
     if (x > 700) {
      x = 0;
     y = 500;
    }

  //flag in the sand
    //flag is drawn
    fill(210,15,5)
    strokeWeight (2);
    triangle (550, 425, 550, 475, 600, 450);
    //line for the flag pole
    strokeWeight (2.5);
    fill(0);
    line(550, 475, 550, 500);
  
    //sand on the beach is drawn
    fill(237,206,138);
    rect(0, 500, 700, 200);
  
  }


//when a key is pressed, it switches between day and night
function keyPressed() {
  if (key === 'n') {
    r = 10;
    g = 10;
    b = 110;
    rCircle = 190;
    gCircle = 190;
    bCircle = 200;
  } else if (key === 'd') {
    r = 90;
    g = 115;
    b = 255;
    rCircle = 255;
      gCircle = 225;
      bCircle = 90;
    }
  }


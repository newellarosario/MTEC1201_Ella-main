//first ever sketch 9/14 
/*
multi line comments
hooray
yipppeee
*/

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  //background - setting our background color
   fill("red")
   background(200);
  
  //stroke weight - thickness of a line
  strokeWeight(5);

  //line - two sets of coordinates and the line that connects the two
  line(50,50,100,200);

  line(300,10,40,100)

  line(600,600,810,700)

  //fill - must come before the shape; if there's only one then everything will be filled that color
 
  rect(300,150, 50, 200)
  
  fill("pink")
  //circle - first two = point of the circle origin, third # is the diameter
  circle(40,40,50)
  
  //quad - every two is a coordinate point for each point of the quad
  quad(500,60,500,150,20,120,40,170)
}

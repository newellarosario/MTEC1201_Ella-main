/* Ella R. "A day at the beach" 
This semester, I wanted to create a program that would
immate the movement of the sky and bring the user into a depiction of a beach
at specific times of the day.
I want to immitate the way that the clouds move, the sun sets, the moon rises, etc.
9/28/2026 - This first sketch ties into it because it would help me sketch out where
different shapes would be in the sky. I wanted to paint the sky with a sun setting and
the moon slowly rising. This is the first part of many depictions of the beach at different times of the day.

10/5/2026 - I added commands that created a movement of the sun setting and the moon appearing. I wanted to dive into the setting and rising of the sun/moon. 
This sketch allows the user to observe the tansition from day and night and is able to place the moon anywhere they want on the canvas. 
INSTRUCTIONS: Observe the transition of the sun to the night sky. Once the night sky appears, you can click anywhere on the canvas to place the moon.
*/

let x = 0 
let y = 500



function setup() {
  createCanvas(700, 700);
    background(92, 117, 255);
}
 
function draw() {
  //sun moves diagonally up and to the right
  background(92, 117, 255);
  fill(255,225,87);
  strokeWeight(2);
  circle(x, y, 200);
  x = x + 3;
  y = y - 3;
//sand on the beach is drawn
  noStroke();
  fill(237,206,138);
  rect(0, 500, 700, 200);
//when the sun gets out of view, the loop stops and the night sky is shown
  if (frameCount > 300) {
    background(9, 12, 112); //night sky is drawn
     noStroke(); //sandy beach is drawn
      fill(237,206,138);
      rect(0, 500, 700, 200);
    noLoop(); //loop stops
  }
}

//mouse is pressed and the moon is placed according to the mouse movement
function mousePressed() {
  background(9, 12, 112);
  fill(190,190,200);
  arc(mouseX, mouseY, 200, 190, PI + QUARTER_PI, TWO_PI);
  //sandy beach is drawn
  noStroke(); //sandy beach is drawn
      fill(237,206,138);
      rect(0, 500, 700, 200);
}

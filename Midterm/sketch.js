/*November 1, 2026 - Midterm Final Project MTEC1201, Ella Rosario
In this game, the player is in control of a turtle that needs to navigate through a beach while avoiding trash obstacles.
The goal of this game is to help the turtle reach the ocean safely. The game starts when you click the image of the turtle
in the opening screen. Once the game starts, the player uses their mouse up and down to control the turtle. The trash on the 
beach is randomly dispersed and the player must avoid them to reach the ocean. If they collide with a piece of trash, the 
game ends. If they reach the ocean, they win the game. Once the game ends, they can click the turtle again to restart the code. 
*/


// game stages

let state = "preGame";

// game character

let turtle;
let turtleX = 0;
let turtleY = 400;
let turtleSize = 100;
let turtleSpeed = 3;

// trash images

let poop;
let bottle;
let apple;
let trashImages = [];
let trash = [];

// game settings
let oceanX = 800;
let beachTop = 200;
let beachBottom = 1000;

// preload images
function preload() {
  turtle = loadImage("sea_turtle.png");
  poop = loadImage("poop.png");
  bottle = loadImage("bottle.png");
  apple = loadImage("Apple.png");
}

// setup
function setup() {
  createCanvas(1000, 1000);
  imageMode(CORNER);
  trashImages = [poop, bottle, apple];
  state = "preGame";
}

// draw based on game state
function draw() {

  if (state === "preGame") {
    preGame();
  }
  else if (state === "game") {
    game();
  }
  else if (state === "gameOver") {
    gameOver();
  }
  else if (state === "gameWin") {
    gameWin();
  }
}

// opening screen

function preGame() {
  background(150, 230, 240);
  sand(0, 750, 1000, 250);
  sandCastle(750, 700, 50, 50);
  sandCastle(800, 650, 50, 100);
  sandCastle(100, 675, 50, 75);
  sandCastle(150, 700, 50, 50);
  openingTitle();
  instructions();
  oceanInstructions();
  image(turtle, 350, 300, 300, 300);
}

// sand is drawn as a rectangle with a sandy color
function sand(SandX, SandY, sandWidth, sandHeight) {
  fill(240, 200, 100);
  noStroke();
  rect(SandX, SandY, sandWidth, sandHeight);
}

// sandcastle is drawn
function sandCastle(sandCastleX, sandCastleY, length, width) {
  fill(240, 200, 100);
  stroke(220, 175, 55);
  strokeWeight(5);
  rect(sandCastleX, sandCastleY, length, width);
  rect(sandCastleX + 23, sandCastleY - 10, length / 10, width / 10);
  rect(sandCastleX + 45, sandCastleY - 10, length / 10, width / 10);
  rect(sandCastleX, sandCastleY - 10, length / 10, width / 10);
}

// opening title
function openingTitle() {
  fill(0);
  noStroke();
  textSize(50);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Save the Turtle!", 500, 100);

}

// instructions
function instructions() {
  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Use your mouse to help the turtle avoid the trash!",500,150);
  text("Click on the turtle to start!",500,200);
}

// click turtle to start game
function mousePressed() {
  if (state === "preGame" && mouseX >= 350 && mouseX <= 650 && mouseY >= 300 && mouseY <= 600) {
    startGame();
  }
  // click turtle on win screen to restart
  else if (
    state === "gameWin" &&
    mouseX >= 400 && mouseX <= 600 &&
    mouseY >= 550 && mouseY <= 750
  ) {
    state = "preGame";
  }
  // click turtle on lose screen to restart
  else if (
    state === "gameOver" &&
    mouseX >= 400 && mouseX <= 600 &&
    mouseY >= 600 && mouseY <= 800
  ) {
    state = "preGame";
  }

}

// start game

function startGame() {
  state = "game";
  turtleX = 0;
  turtleY = 400;

  // create new trash obstacles
  // reference website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  trash = [];

  // generate 16 randomly positioned obstacles
  for (let i = 0; i < 16; i++) {
    let trashObject = {
      x: random(150, 730),
      y: random(beachTop + 50, beachBottom - 50),
      size: 50,

      // randomly select one of the three trash images
      img: random(trashImages)
    };
    trash.push(trashObject);
    // reference website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push 
  }
}

// draw the ocean
function ocean(OceanX, OceanY, oceanWidth, oceanHeight) {
  noStroke();
  fill(30, 80, 200);
  rect(OceanX, OceanY, oceanWidth, oceanHeight);
}

// draw the gameplay scene
function game() {
  background(150, 230, 240);
  sand(0, 200, oceanX, 800);
  ocean(oceanX, 0, 200, 1000);
  // TURTLE MOVEMENT
  // turtle moves horizontally across the beach
  turtleX += turtleSpeed;
  // mouse controls the turtle's vertical position
  // keep the turtle inside the beach area
  turtleY = constrain(mouseY - turtleSize / 2,beachTop,beachBottom - turtleSize);
  // constrain function from: https://p5js.org/reference/p5/constrain/
  // turtle is drawn
  image(turtle,turtleX,turtleY,turtleSize,turtleSize);

  // trash appears randomly on the beach
  for (let i = 0; i < trash.length; i++) {
//index function from: https://p5js.org/reference/p5/for/ 
    image(trash[i].img,trash[i].x,trash[i].y,trash[i].size,trash[i].size);

  // check whether turtle touches trash
    if (checkCollision(trash[i])) {
      state = "gameOver";
      return;
    }
  }
  // check if turtle reaches ocean
  if (turtleX + turtleSize >= oceanX) {
    state = "gameWin";
    return;
  }

}

// check for collision between the turtle and a trash object
function checkCollision(trashObject) {

  // turtle collision boundaries
  let turtleLeft = turtleX + 15;
  let turtleRight = turtleX + turtleSize - 15;

  let turtleTop = turtleY + 15;
  let turtleBottom = turtleY + turtleSize - 15;

  // trash collision boundaries
  let trashLeft = trashObject.x;
  let trashRight = trashObject.x + trashObject.size;

  let trashTop = trashObject.y;
  let trashBottom = trashObject.y + trashObject.size;

  // Check if the two rectangles overlap
  return (turtleRight > trashLeft && turtleLeft < trashRight &&turtleBottom > trashTop &&turtleTop < trashBottom);

}

// gameplay instructions
function oceanInstructions() {
  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Move your mouse up and down to avoid the trash!", 500,650);
  text("Reach the ocean without touching the trash!",500,675);

}

// stage 3: win screen

function gameWin() {
  background(150, 230, 240);
  fill(0);
  noStroke();
  textSize(60);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("You Win!", 500, 350);
  textSize(30);
  text("You saved the sea turtle!",500,420);
  text("Click the turtle to play again",500,520);
  image(turtle, 400, 550, 200, 200);
}

// stage 3: lose screen

function gameOver() {
  background(150, 230, 240);
  fill(0);
  noStroke();
  textSize(60);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Game Over!", 500, 450);
  textSize(30);
  text("The turtle touched the trash!",500,520);
  text("Click the turtle to try to save the turtle again!",500,570);
  image(turtle, 400, 600, 200, 200);

}

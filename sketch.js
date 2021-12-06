var database;
var form,
  game,
  player,
  playerCount = 0,
  bgimg;
 
var gameState = 0;


function preload() {
  bgimg = loadImage("images/background1.png");
}

function setup() {
  database = firebase.database();
  canvas = createCanvas(windowWidth, windowHeight);

  game = new Game();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

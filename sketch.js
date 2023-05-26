var cam;
var locked = false;
var gameOver = false
var levelPoints = 2
var score = 0
var graphics

var go,gp

let boxes = [];

function preload(){
  go = loadSound('sounds/gameOver.mp3')
  gp = loadSound('sounds/playing.mp3')
}

function setup() {
  createCanvas(windowWidth - 25,windowHeight - 25,WEBGL);
  cam = createCamera()
  cam.setPosition(0,-30,0);
  gp.play()
  gp.onended(gp.pause, gp.play)

  for (let i = 0; i < 10 + levelPoints; i++) {
    let posX = random(cam.eyeX - 300, cam.eyeX + 300); // Random x position
    let posZ = random(cam.eyeZ - 300, cam.eyeZ - 933); // Random z position
    boxes.push(new Box(posX, 0, posZ, 10,10,10));
  }
}

function draw() {
  background(220)

  boxesUpdate()
  loadText()
  score = score + 1
  m()
  checkCollision()
}

function m(){
if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
  cam.move(-3, 0, 0);
}
if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  cam.move(3, 0, 0);
}
}

function mouseClicked() {
  if (gameOver) {
    gameOver = false;
    score = 0
  }
}
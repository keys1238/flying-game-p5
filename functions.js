function boxesUpdate(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].update();
        boxes[i].z = boxes[i].z + levelPoints
        if(boxes[i].z > cam.eyeZ - 40 ){
          boxes.splice(i, 1);
        }
        if(boxes.length < 80 || boxes.length == null ){
          for (let i = 0; i < 200; i++) {
            let posX = random(cam.eyeX - 2000, cam.eyeX + 2000); // Random x position
            let posZ = random(cam.eyeZ - 2000, cam.eyeZ - 200); // Random z position
            boxes.push(new Box(posX, 0, posZ, 10,10,10));
          }
          levelPoints = levelPoints + 2
        }
      }
}

function loadText(){
    push()
    translate(cam.centerX,-200,cam.centerZ)
    graphics = createGraphics(500,500)
    graphics.background(225)
    graphics.fill("Black")
    graphics.textSize(60);
    if(gameOver == true){graphics.text("gameOver",width/6,height/6)}
    if(gameOver == false){graphics.text("score:" + score,width/6,height/6)}
    texture(graphics);
    noStroke()
    plane(300,300);
    pop()
}

function checkCollision() {
  let camX = cam.eyeX;
  let camZ = cam.eyeZ;

  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    if (
      camX > box.x - 48  &&
      camX < box.x + 48  &&
      camZ > box.z - 48  &&
      camZ < box.z + 48 
    ) {
      // Collision detected
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    graphics.text("gameOver",width/6,height/6)
    gp.stop()
    go.play()
    noLoop()
  }
  if (!gameOver) {
    loop()
  }
}
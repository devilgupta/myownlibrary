var fixedRect, movingRect;
var gob1,gob2,gob3,gob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  gob1=createSprite(200,100,50,50);
  gob1.shapeColor="green";
  gob2=createSprite(300,100,50,50);
  gob2.shapeColor="green";
  gob3=createSprite(400,100,50,50);
  gob3.shapeColor="green";
  gob4=createSprite(500,100,50,50);
  gob4.shapeColor="green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  
  if(isTouching(movingRect,gob4)){
    movingRect.shapeColor = "blue";
    gob2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gob2.shapeColor = "green";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

 
 
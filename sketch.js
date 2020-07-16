var fixedRect,movingRect;
var bounceRect1,bounceRect2;
function setup() {
  createCanvas(1000,600);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="red";

  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor="red";

  bounceRect1=createSprite(100,500,30,80);

  bounceRect1.debug=true;

  bounceRect2=createSprite(900,500,30,80);

  bounceRect2.debug=true;

  bounceRect1.velocityX=3;

  bounceRect2.velocityX=-3;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(fixedRect.width/2+movingRect.width/2>movingRect.x-fixedRect.x &&
    fixedRect.width/2+movingRect.width/2>fixedRect.x-movingRect.x&&
    fixedRect.height/2+movingRect.height/2>movingRect.y-fixedRect.y&&
    fixedRect.height/2+movingRect.height/2>fixedRect.y-movingRect.y){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
if(bounceRect1.width/2+bounceRect2.width/2>bounceRect1.x-bounceRect2.x&&
  bounceRect1.width/2+bounceRect2.width/2>bounceRect2.x-bounceRect1.x){
   bounceRect1.velocityX=bounceRect1.velocityX*(-1);
   bounceRect2.velocityX=bounceRect2.velocityX*(-1); 
  }

  if(bounceRect1.height/2+bounceRect2.height/2>bounceRect1.y-bounceRect2.y&&
    bounceRect1.height/2+bounceRect2.height/2>bounceRect2.y-bounceRect1.y){
      bounceRect1.velocityY=bounceRect1.velocityY*(-1);
      bounceRect2.velocityY=bounceRect2.velocityY*(-1);  
    }
  drawSprites();
}

var Monkey , MonkeyCoat;
var Ground;
var Bananna , Peel, Bunch, BanannaGun,Aim;
var Rock, Shell, Cluster, RockSprout;
var Survival = 0, Score = 0;

function preload(){
  Coat =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  Peel = loadImage("banana.png");
  
  Shell = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,400);
  
  Monkey = createSprite(50, 225, 20, 40);
  Monkey.addAnimation("Running", Coat);
  Monkey.scale = 0.1;
  
  Ground = createSprite(600, 385, 1200, 40);
  Ground.shapeColor = "Green";
  
  Bunch = createGroup();
  Cluster = createGroup();
}

function BanannaGun(){
  if(frameCount % 50 == 0){
    Aim = Math.round(random(100,175));
    
    Bananna = createSprite(700, Aim, 50, 10);
    Bananna.velocityX = -12.5;
    
    Bananna.addImage(Peel);
    Bananna.scale = 0.1;
    
    Bananna.lifetime = 200;
    Bunch.add(Bananna);
    
    
}
  }

function RockSprout(){
  if(frameCount % 100 == 0){
    Rock = createSprite(700,335,20,40);
    Rock.velocityX = -10;
    
    Rock.addImage("Covering", Shell);
    Rock.scale = 0.2;
    
    Rock.lifetime = 200;
    Cluster.add(Rock);
    }
}

function draw() {
  background("lightGreen");
  
  Survival = Math.ceil(frameCount/frameRate())
  stroke("Black");
  fill("Black");
  textSize(20);
  text("Survival: " + Survival + "  |  " + "Score: " + Score, 215, 20);
  
  BanannaGun();
  RockSprout();
  
  if (keyDown("space") && Monkey.y >= 325) {
      Monkey.velocityY = -14;
    }
  Monkey.velocityY = Monkey.velocityY + 0.5;
  Monkey.collide(Ground);
  
  Ground.velocityX = -10;
  if (Ground.x < 0){
    Ground.x = 600;
  }
  
  drawSprites();
}







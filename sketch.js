
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var PLAY=1;
var END=0;
var gameState;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX=-4;
  console.log(ground.x);
  


  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  
   //creating score
    stroke("white");
    textSize(20);
    fill("white");
    text("Score" + score , 500,500);
    
     stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
     text("Survival Time : " + survivalTime , 100,50);
  
 
    
       //making ground go long 
 if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
   //jump when pressed space
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
   //giving gravity to monkey  
      monkey.velocityY = monkey.velocityY + 0.8
  
  if (FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
    
  if (obstacleGroup.isTouching(monkey)){
    background("white");
    fill("black");
    textSize(100);
    text("Game Over", 50,300);
    
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    
    ground.velocityX=0;
    obstacleGroup.setVelocityX=0;
    FoodGroup.setVelocityX=0;
    
  }
  
  spawnbanana();
  spawnobstacle();
    
  

    //colliding monkey with ground
  monkey.collide(ground);
  
  drawSprites();
  
}

function spawnobstacle(){
  if (frameCount % 80 === 0){
    obstacle=createSprite(600,320,1200,10);
  obstacle.velocityX=-4;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
    
  obstacleGroup.add(obstacle);
}
}

function spawnbanana(){
  if (frameCount % 300 === 0){
  banana=createSprite(600,230,1200,10);
  banana.velocityX=-4;
  banana.addImage(bananaImage);
  banana.scale=0.15;
    
  FoodGroup.add(banana);
  }
}
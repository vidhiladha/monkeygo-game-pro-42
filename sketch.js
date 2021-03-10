var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload (){
  backImage = loadImage("jungle.jpg");
  
monkey_running =    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
}



function setup() {
  
  createCanvas(800,400);
  //creating monkey
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(400,385,900,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  ground.visible = false;
  
// creating background
 back = createSprite(0,0,800,400);
  back.addImage(backImage);
  back.scale=1.5;
  back.x=back.width/2;
  back.velocityX = -4;
 
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
  
  score = 0;
  
}


function draw() {
background(225);
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }  
  
  if (back.x<100){
    back.x = back.width/2;
  }  
  
   if (foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
      score = score + 2;
  }
  switch(score){
    case 10: monkey.scale = 0.12;
             break;
    case 20: monkey.scale = 0.14;
             break;
    case 30: monkey.scale = 0.16;
             break;
    case 40: monkey.scale = 0.18;
             break;
   default: break;        
}
  
   if(keyDown("space")){
     monkey.velocityY = -12; 
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  spawnFood();
  spawnobstacles();
 
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.08;
  }
 drawSprites();
  
 stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50);
  
}

 function spawnFood(){
 if (frameCount % 80 === 0) {
  banana = createSprite(600,250,50,10);
  banana.y = Math.round(random(80,400));
  banana.addImage(bananaImage);
  banana.scale = 0.05;
  banana.setLifetime = 300;    
  banana.velocityX = -4;
   monkey.depth = banana.depth + 1;
      foodGroup.add(banana);
   }
 }

function spawnobstacles(){
  
    if (frameCount % 300 === 0) {
  //obstacles.y = Math.round(random(300,350));
  obstacles = createSprite(800,350,10,40);
  obstacles.addImage(obstacleImage);
  obstacles.scale = 0.2;
  obstacles.velocityX = -4;
  obstacles.setLIfeTime = 300;
      obstaclesGroup.add(obstacles);
 }
  }


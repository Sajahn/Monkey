
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  FoodGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
}


function draw() {
  background("white");
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  if(ground.x<0){
    ground.x=ground.width/2; 
  }
  drawSprites();
}
function spawnFood() {
//write code here to spawn the Food 
  if (frameCount % 80 === 0) { banana = createSprite(600,250,40,10); banana.y = random(120,200); banana.velocityX = -5; 
//assign lifetime to the variable 
banana.lifetime = 300; 
monkey.depth = banana.depth + 1; 
//add image of banana 
banana.addImage(bananaImage); 
banana.scale=0.05; 
//add each banana to the group 
FoodGroup.add(banana); } }








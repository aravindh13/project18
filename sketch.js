var backImage,backgr;
var player,player_running;
var ground,ground_img;
var FoodGroup,bananaImage;
var obstaclesGroup,Obstacles_img;
var gameOverl;
var score = 0;

function preload(){
  backImage =loadImage("jungle2.png");
  player_running =
loadImage("Monkey01.png","Monkey02.png","Monkey03.png","Monkey04.png","Monkey05.png","Monkey06.png");
bananaImage = loadImage("Banana.png");
obstacles_img =loadImage("stone.png");
}

function setup() {
  createCanvas(800, 400);
  backgr =createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale =1.5;
  backgr.x =backgr.width/2;
  backgr.velocityX =-4;
  
  player =createSprite(100,340,20,50);
  player.addAnimation("Running",player_running)
  player.scale =0.1;
  
  ground =createSprite(400,350,800,10);
  ground.velocityX =-4;
  ground.x =ground.width/2;
  ground.visible =flase;
  
  FoodGroup =new Group();
  obstacles =new Group();
  
  score =0;
}

function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x =ground.width/2;
  }
 if(backgr.x<100){
   backgr.x =backgr.width/2;
 }
  if(FoodGroup.isTouching(playre)){
     FoodGroup.destroyEach();
  score =score+2;
}

switch(score){
  case 10:player.scale =0.12;
         break;
  case 20:player.scale =0.14;
         break;
  case 30:player.scale =0.16;
         break;
  case 40:player.scale =0.18;
         break;  
 default:break;
}
  if(keyDown("space")){
     player.velocityY=-12;
     }
  player.velocityY=player.velocity+0.8;
  player.collide(ground);
  spawnFood();
  
  if(obataclesGroup.iaTouching(player)){
    player.scale=0.08;
    score=score+2;
  }
   drawSprite();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50)
}

function spawnObstacles(){
  if(frameCount%300===0){
    var Obstacles = createSprite(800,320,10,40);
    Obstacles.velocityX=-6;
    Obstacles.addImage(obstacles_img);
    Obstacles.scale=0.2;
    Obstacles.lifetime=300;
    
    ObstacleGroup.add(Obstacles);
  
 }
}
 function spawnfoodGroup(){
   if(frameCount%80===0){
   var banana =createSprite(600,250,40,10);
   banana.addImage("Banana");
   banana.lifetime=300;
   player.depth=banana.depth+1;
   banana.scale=0.05;
   banana.y=random(120,200);
   banana.velocityX=-5;
   
   
     foodGroup.add(banana);
   }
 }
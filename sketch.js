
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  foodgroup=new Group()
  obstaclegroup=new Group()
  survivaltime=0
}


function draw() {
background("white")
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground)
  food()
  obstacles()
  drawSprites()
  textSize(20)
  survivaltime=Math.round(frameCount/60)
  text("survivaltime="+survivaltime,100,50)
  if(obstaclegroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstaclegroup.setVelocityXEach(0)
     foodgroup.setVelocityXEach(0)
    obstaclegroup.setLifetimeEach(-1)
        foodgroup.setLifetimeEach(-1)

  }
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(600,250,40,10)
    banana.y=random(120,200)
    banana.velocityX= -5
    banana.lifetime=300
    banana.addImage(bananaImage)
    banana.scale=0.05
    foodgroup.add(banana)
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(800,320,10,40)
    obstacle.velocityX= -5
    obstacle.lifetime=300
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.15
    obstaclegroup.add(obstacle)
  }
}






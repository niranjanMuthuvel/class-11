var trex,trex_running
var edges
var ground,groundimg
var invisibleGround

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundimg = loadImage("ground2.png")
}


function setup(){
createCanvas(600,200)
//create trex sprite
trex = createSprite(50,160,20,50)
trex.addAnimation("running",trex_running)
trex.scale = 0.5
edges = createEdgeSprites()

//create ground sprites
ground = createSprite(200,190,400,20)
ground.x = ground.width/2
ground.addImage(groundimg)

//create invisibleGroundSprite
invisibleGround = createSprite(200,195,400,5)
invisibleGround.visible = false



}

function draw(){
background(180)
console.log(trex.y)

//console feature
console.info("this is trex runner game");
console.error('this is an error message');
console.warn('a warning message');


//to make the ground move
ground.velocityX = -2

//to create an infinite ground
if(ground.x < 0){
  ground.x = ground.width/2
}

//make the trex jump when space key is pressed
if(keyDown("space") && trex.y >= 100){
  trex.velocityY=-10


}
//add gravity
trex.velocityY = trex.velocityY + 0.5

//make the trex stand
trex.collide(invisibleGround)

drawSprites();
} 


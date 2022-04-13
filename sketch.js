var tanjiro
var tanjiro_img
var bg
var bg_img
var loadImage

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  tanjiro_img=loadImage("tanjiro.png");
  bg_img=loadImage("bgImg.jpg")
}

function setup() {
	createCanvas(1000,800);
  tanjiro.createSprite(400,350);
  tanjiro.addImage(tanjiro_img);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
if(keyDown("UP_ARROW")){
  tanjiro.velocityY=-5;
}else if(keyDown("DOWN_ARROW")){
  tanjiro.velocityY=5;
}else if(keyDown("LEFT_ARROW")){
  tanjiro.velocityX=-5;
}else if(keyDown("RIGHT_ARROW")){
  tanjiro.velocityX=5;
}else{
  tanjiro.velocityX=0;
  tanjiro.velocityY=0;
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg_img);
  drawSprites();
}




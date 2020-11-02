const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var batmansprite
var batmanumberella
var raindrop
function preload(){
    
  batmansprite = loadImage("walkmansprite/walking_1.png")
}

function setup(){
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
  batman = createSprite(200,200,100,100)
  batmanumberella = new umberella(200,200,50)
  batman.addImage(batmansprite)
}

function draw(){
    drawSprites()
    createraindrop()
    raindrop.display()
    Engine.update(engine)
}   
function createraindrop(){
    raindrop = new raindwop(random(0,1200),0,-1)
}



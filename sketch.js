
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var body1;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var prop = {
    isStatic: true
  }
  
  body1 = Bodies.rectangle(200,380,400,20,prop);
  World.add(world,body1);

  console.log(body1);

  


}

function draw() {
  background("yellow");  
  Engine.update(engine);


  rectMode(CENTER);
  rect(body1.position.x,body1.position.y,400,20);
  
  drawSprites();
}
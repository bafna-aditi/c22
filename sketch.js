const Engine=Matter.Engine;//namespacing 
const World=Matter.World;
 const Bodies=Matter.Bodies;
var engine,world,box,ground
function setup() {
  createCanvas(800,400);
  engine=Engine.create(); world=engine.world;
  box=Bodies.rectangle(200,200,100,100)
  World .add(world,box)
  
  var options={isStatic:true}
  ground=Bodies.rectangle(400,380,800,100,options)
  World.add(world,ground)
}

function draw() {
  Engine.update(engine);
  background("black");  
  rectMode(CENTER)
  rect(box.position.x,box.position.y,100,100)
  rect(ground.position.x,ground.position.y,800,100)

  drawSprites();
}
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var engine, world, ground, pelota;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option ={
    isStatic: true
  }
  ground=Bodies.rectangle(400,380,100,20, option)
  World.add(world,ground)
  var balloptions={
    restitution:1
  }
  pelota=Bodies.circle(200,100,50, balloptions)
  World.add(world,pelota)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20)
  ellipseMode(RADIUS);
  ellipse(pelota.position.x,pelota.position.y,50,50)
  drawSprites();
}
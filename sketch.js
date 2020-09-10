const Engine=Matter.Engine
const World=Matter.World
const Bodies= Matter.Bodies
var engine, world;
var ground,ball;

function setup() { 
  var canvas=createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var options= {
    isStatic: true 
  
  }
  var balloptions= {
    restitution: 2.0
  }
  ball=Bodies.circle(200,100,20,balloptions);
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
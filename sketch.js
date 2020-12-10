
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin

function preload()
{
  dustbin=loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Ball (100,100,20)

	ground= new Ground (600,680,1200,20)

	recA = Bodies.rectangle(1100,620,20,100, {isStatic:true})
	World.add(world, recA);
	
	recB = Bodies.rectangle(850,620,20,100, {isStatic:true})
	World.add(world, recB);

	recC = Bodies.rectangle(975,660,280,20, {isStatic:true})
	World.add(world, recC);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  paper.display()
  ground.display()
  rect(recA.position.x,recA.position.y,20,100)
  rect(recB.position.x,recB.position.y,20,100)
  rect(recC.position.x,recC.position.y,280,20)
  image(dustbin,975,500,290,150)
}
function keyPressed() {
   if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
}




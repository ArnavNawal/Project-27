
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	roof = new Ground(750,50,700,40)
	bobObject1 = new Bob(600,600,100);
	bobObject2 = new Bob(650,600,100);
	bobObject3 = new Bob(750,600,100);
	bobObject4 = new Bob(850,600,100);
	bobObject5 = new Bob(950,600,100);
	rope1=new Rope1(bobObject1.body,{x:500,y:50}) 
	rope2=new Rope1(bobObject2.body,{x:650,y:50}) 
	rope3=new Rope1(bobObject3.body,{x:750,y:50}) 
	rope4=new Rope1(bobObject4.body,{x:850,y:50}) 
	rope5=new Rope1(bobObject5.body,{x:950,y:50})
}


function draw() {
	Engine.update(engine)
	
  rectMode(CENTER);
  background("red");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-20,y:-20})

	}
}




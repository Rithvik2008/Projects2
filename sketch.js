
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ball=new Ball(100,230,15)
	box=new Side(1020,480,10,100)
	box2=new Side(1125,480,10,100)
	box3=new Box(1075,480,0,0)
	ground=new Ground(600,550,1200,20)
	

	Engine.run(engine);
  
}


function draw() {
  background(0);

  box.display();
  box2.display();
 box3.display();
  ground.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){

      Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-40});
    }
  }



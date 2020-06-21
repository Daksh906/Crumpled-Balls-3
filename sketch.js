var line1,line2,line3;
var ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinimg;
var paper,launcher;
function preload()
{
  dustbinimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   

	dustbin1 = new Dustbin(500,675,200,20);
	

	dustbin2 = new Dustbin(410,625,20,100);
	
	dustbin3 = new Dustbin(590,625,20,100);
	
	paper1 = new Paper(50,10,30);
	
	launcher1 = new Launcher(paper1.body,{x:250,y:100});

    

    ground1 = new Ground(400,690,800,20);
    


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  
 paper1.display();
 ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 launcher1.display();
 image(dustbinimg,380,430,250,250);
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
		
	}
function mouseReleased(){
		launcher1.fly();
	
	}



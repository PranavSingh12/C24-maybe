
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane;
var hammer;
var iron;
var sand;
var rubber;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    sand1 = new Sand(500,320,10,10);
    sand2 = new Sand(600,320,10,10);
    sand3 = new Sand(700,240,10,10);
    sand4 = new Sand(800,240,10,10);
    sand5 = new Sand(810,160,10,10);
    
    iron = new Iron(810,350);
    
    rubber = new Rubber(810,260,300,PI/2);
   
    hammer = new Hammer(100,100);

	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  plane.display();

  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  rubber.display();

  hammer.diplay();

  drawSprites();
 
}


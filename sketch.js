const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  
  
  
  
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");




  for(var k = 0;k<=width;k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}




  drawSprites();
 
}

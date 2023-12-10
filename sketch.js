const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
// 7 declare as variaveis dos ventiladores


var ball;


var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };
  ground = Bodies.rectangle(0,400,400,20,ground_options);
  World.add(world,ground); 
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);  
  // 8 crie os objetos usando new
  


// 9 relembre bola e corpo sao criados
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,750,20);
//  10 chame a função

  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  





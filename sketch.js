const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bob,bob2,bob3,bob4,bob5, sling1,sling2,sling3,sling4,sling5;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  

  

  ball1 = new Ball(200, 500, 80, 80);
  ball2 = new Ball(250, 500, 80, 80);
  ball3 = new Ball(300, 500, 80, 80);
  ball4 = new Ball(350, 500, 80, 80);
  ball5 = new Ball(400, 500, 80, 80);
  rope1 = new Rope(ball.body, { x: 500, y: 150 });
  rope2 = new Rope(ball.body, { x: 500, y: 150 });
  rope3 = new Rope(ball.body, { x: 500, y: 150 });
  rope4 = new Rope(ball.body, { x: 500, y: 150 });
  rope5 = new Rope(ball.body, { x: 500, y: 150 });


}

function draw() {
  background(180);
  Engine.update(engine);
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}



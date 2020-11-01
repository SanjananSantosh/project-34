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

  

  

  bob1 = new Bob(200, 500, 80, 80);
  bob2 = new Bob(250, 500, 80, 80);
  bob3 = new Bob(300, 500, 80, 80);
  bob4 = new Bob(350, 500, 80, 80);
  bob5 = new Bob(400, 500, 80, 80);
  sling1 = new Sling(bob.body, { x: 500, y: 150 });
  sling2 = new Sling(bob.body, { x: 550, y: 150 });
  sling3 = new Sling(bob.body, { x: 600, y: 150 });
  sling4 = new Sling(bob.body, { x: 650, y: 150 });
  sling5 = new Sling(bob.body, { x: 700, y: 150 });


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
  Matter.Body.setPosition(bob.body, { x: mouseX, y: mouseY });
}



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, rock, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane (600,height,1200,20)
    hammer = new Hammer (10,100);
    rubber = new Rubber(900,450,70);
    rock = new Rock (100,150,140,70);
    iron = new Iron (200,200,100,200);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    rock.display();
    iron.display();

    
 
}
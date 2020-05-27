const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, gro ,box2 ;

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    
    gro = new ground(200,350,400,20);

    box2= new Box(220,250,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    gro.display();
    box2.display();

}
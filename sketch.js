const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Body=Matter.Body
const Constraint=Matter.Constraint
var engine,world;
var score=0

function setup() {
  createCanvas(800,700);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,680,800,20)
  platform=new Ground(200,500,200,20)
  platform2=new Ground(580,300,200,20);
  polygon=new Polygon(350,290,50,50); 
  slingshot=new Sling(polygon.body,{x:350,y:250})
  box1=new Box(115,490,20,30);
  box2=new Box(135,490,20,30);
  box3=new Box(155,490,20,30);
  box4=new Box(175,490,20,30);
  box5=new Box(195,490,20,30);
  box6=new Box(215,490,20,30);
  box7=new Box(235,490,20,30);
  box8=new Box(255,490,20,30);
  box9=new Box(275,490,20,30);
  box10=new Box(135,400,20,30);
  box11=new Box(155,400,20,30);
  box12=new Box(175,400,20,30);
  box13=new Box(195,400,20,30);
  box14=new Box(215,400,20,30);
  box15=new Box(235,400,20,30);
  box16=new Box(255,400,20,30);
  box17=new Box(155,310,20,30);
  box18=new Box(175,310,20,30);
  box19=new Box(195,310,20,30);
  box20=new Box(215,310,20,30);
  box21=new Box(235,310,20,30);
  box22=new Box(175,220,20,30);
  box23=new Box(195,220,20,30);
  box24=new Box(215,220,20,30);
  box25=new Box(195,130,20,30);
  b=new Box(500,290,20,30);
  b2=new Box(520,290,20,30);
  b3=new Box(540,290,20,30);
  b4=new Box(560,290,20,30);
  b5=new Box(580,290,20,30);
  b6=new Box(600,290,20,30);
  b7=new Box(620,290,20,30);
  b8=new Box(640,290,20,30);
  b9=new Box(660,290,20,30);
  b10=new Box(520,200,20,30);
  b11=new Box(540,200,20,30);
  b12=new Box(560,200,20,30);
  b13=new Box(580,200,20,30);
  b14=new Box(600,200,20,30);
  b15=new Box(620,200,20,30);
  b16=new Box(640,200,20,30);
  b17=new Box(540,110,20,30);
  b18=new Box(560,110,20,30);
  b19=new Box(580,110,20,30);
  b20=new Box(600,110,20,30);
  b21=new Box(620,110,20,30);
  b22=new Box(560,20,20,30);
  b23=new Box(580,20,20,30);
  b24=new Box(600,20,20,30);
  b25=new Box(580,0,20,30);


}

function draw() {
  background("Pink");  
  Engine.update(engine);
  ground.display();
  platform.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
   b.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
   b7.display();
   b8.display();
   b9.display();
   b10.display();
   b11.display();
   b12.display();
   b13.display();
   b14.display();
   b15.display();
   b16.display();
   b17.display();
   b18.display();
   b19.display();
   b20.display();
   b21.display();
   b22.display();
   b23.display();
   b24.display();
   b25.display();
   polygon.display();
   slingshot.display();
   textSize(30)
   fill("white")
   text("score "+score,400,38)

  text(mouseX+","+mouseY,mouseX,mouseY);
 }

function mouseDragged(){
 Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
 if(keyCode==32){
   slingshot.attach(polygon.body);
 } 
}

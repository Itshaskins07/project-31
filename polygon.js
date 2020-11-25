class Polygon{
    constructor(x,y,w,h){
    var options={
    density: 1.2,
    friction:1,
    restitution:0, 
        
}
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.width=w;
    this.height=h;
    this.image=loadImage("polygon.png")
}
    display(){
    push();
    imageMode(CENTER);
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    fill(random(0,255),random(0,255),random(0,255));
    image(this.image,0,0,this.width,this.height);
    pop();   
}




}
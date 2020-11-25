class Box{
    constructor(x,y,w,h){
    var options={
    density: 1.2, 
        
}
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.width=w;
    this.height=h;
}
    display(){
    if(this.body.speed<10){

       
    push();
    rectMode(CENTER);
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    fill(random(0,255),random(0,255),random(0,255));
    rect(0,0,this.width,this.height);
    pop();   
    } else{
        World.remove(world,this.body)
        score=score+50;
    }
}




}
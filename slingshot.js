class Sling{
    constructor(body,point){
        var options={
        bodyA:body,
        pointB:point,
        length:20,
        stiffness:0.04
        }   
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);

    }
    display(){
        push();
        if(this.constraint.bodyA!=null){

        
        strokeWeight(6);
        line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.pointB.x,this.constraint.pointB.y)
        }
        pop();    
    }

    fly(){
    this.constraint.bodyA=null;    
    }
    attach(hi){
     this.constraint.bodyA=hi   
    }
}

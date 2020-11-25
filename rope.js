class Rope1{ 
    constructor(body1,point1) { // // this.offsetY=offsetY 
        var options={ bodyA:body1, pointB:point1, 
        length: 500 
        } //console.log(options); 
        this.rope=Constraint.create(options) 
        World.add(world,this.rope) } 
        display() 
        { 
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.pointB;
        strokeWeight(2); 
        line(pointA.x, pointA.y,pointB.x,pointB.y); 
    } } 
   
class Bob{
    constructor(x,y,radius)
    {
        var options ={
            isStatic : false,
            'friction': 0.3,
            'density': 1.2,
            'restitution' : 0.3
        };
        this.body = Bodies.circle(x,y,radius);
        World.add(world,this.body);
        

    }
    display(){
        push();
        //translate(pos.x, pos.y);
        fill(255, 204, 100);
        ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y,50,50);
        
        stroke("blue");
        
        //rect(0, 0, this.width, this.height);
        pop();
      }
    };
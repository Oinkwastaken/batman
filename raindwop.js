
class raindwop{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    fill(255);
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
}
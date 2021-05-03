class Slingshot{
    constructor(bodyA,bodyB){
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.Slingshot = Constraint.create(option);
        World.add(world,this.Slingshot);
    }
    display(){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.Slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
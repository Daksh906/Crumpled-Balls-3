class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    fly(){
      this.launch.bodyA = null;
    }
    
    display(){
        if(this.launch.bodyA){
        var pointA = this.launch.bodyA.position;
        var pointB = this.launch.pointB;
        strokeWeight(4);
        line(pointA.x+5, pointA.y+10, pointB.x-5, pointB.y+5);
    }
    }
    
}
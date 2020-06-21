class Paper {
    constructor(x, y, radius) {
      var options = {
          isSatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2

      }
      
      
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      angleMode(RADIANS);
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(RADIUS);
      fill(255);
      stroke("green");
      strokeWeight(4);
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
}
  
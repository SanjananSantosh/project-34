class Sling {
    constructor(bodyA, pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.0,
          length:200
      }
      this.pointB=pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.sling);
    }
    display(){
      var pointA=this.rope.bodyA.position;
      var pointB=this.pointB;

      push();
      stroke("black");
      strokeWeight(2);
      line(pointB.x,pointB.y,pointA.x,pointA.y);
      pop();
    }
  }
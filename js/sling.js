class Sling{
    constructor(body,launcher){
        var options={
  bodyA:body,
  pointB:launcher,
  stiffness:0.008,
  length:10
}
this.bodyA = body;
this.pointB = launcher;
this.sling = Constraint.create(options);
World.add(world, this.sling);
}

attach(body){
    this.sling.bodyA = body;
}

fly(){
this.sling.bodyA = null;
}

display(){
if(this.sling.bodyA){
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;

strokeWeight(0.5);
line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
}
class cube {

  constructor(x, y) {
    var opction = {
      isStatic: false

    }

    this.Abody = Bodies.rectangle(x, y, 30, 40, opction);
    World.add(world, this.Abody)
    this.w = 30
    this.h = 40
  }

  display() {
    
    var angle = this.Abody.angle;
    var pos= this.Abody.position;
    push();
    translate(this.Abody.position.x, this.Abody.position.y);
    rotate(angle);
    rectMode(CENTER)
    rect( 0,0,this.w,this.h)
    pop();
  }

}
class Particle {
    constructor(x, y,radius) {
      var options = {
           'isStatic': false,
          'restitution':0.3,
          'friction':0.5,
          'density':2
      }

      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      this.color = color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){  
    push();
    ellipseMode(RADIUS);
    fill(this.color);
    circle(this.body.position.x,this.body.position.y,this.radius);
    pop();
    }
    }
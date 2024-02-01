let dots = [];
let numDots = 1000;

let repels = [];
let attracts = [];

let G = 1;

// p5 calls this function right away when the webpage is loaded
function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
  noStroke();

  for (let i = 0; i < numDots; i++) {
    let x = width / numDots * i;
    let y = height/2 + sin(i / numDots * 2 * PI) * height/3;
    dots.push(new Dot(x, y, 1, i))
  }

  for (let i = 0; i < 5; i++) {
    repels.push(createVector(random(width), random(height)));
    attracts.push(createVector(random(width), random(height)));
  }

  background(0, 0, 100);
}

function mousePressed() {
  for (let i = 0; i < 5; i++) {
    repels[i] = (createVector(random(width), random(height)));
    attracts[i] = (createVector(random(width), random(height)));
  }
}

let xoff = 0;
let yoff = 0;
let inc = 0.01;
let dim = 10;
let start = 0;

function draw() {
  background(0, 0, 100);

  xoff = 0;
  for (let x = 0; x < width; x += dim) {
    noStroke();
    fill(noise(start + xoff) * 360, 100, 100);
    rect(x, height/2 - 50, dim, 100);
    xoff += inc;
  }
  start += 0.01;

  noStroke();
  for (let repel of repels) {
    fill(100, 100, 100, 0.1);
    // ellipse(repel.x, repel.y, 50);

    repel.x += random(-5, 5);
    repel.y += random(-5, 5);
  }

  for (let attract of attracts) {
    fill(300, 100, 100, 0.1);
    // ellipse(attract.x, attract.y, 50);

    attract.x += random(-5, 5);
    attract.y += random(-5, 5);
  }

  for (let dot of dots) {
    dot.update();
  }
}



// Below, we define the Dot class, which defined the objects we instantiate inside the
// setup function above.
class Dot {
  constructor(x, y, diameter, id) {

    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.id = id;

    this.diameter = diameter + random(-15, 15);

    this.hue = this.id / numDots * 360;

    this.gravity = createVector(0, 0.1);
  }


  addForce(force) {
    this.acceleration.add(force);
  }

  forces() {
    for (let repel of repels) {
      let force = p5.Vector.sub(repel, this.position);
      let dsq = force.magSq();
      dsq = constrain(dsq, 5, 50);
      let strength = G / dsq;
      force.setMag(strength);
      // force.mult(-1);
      this.addForce(force);
    }

    for (let attract of attracts) {
      let force = p5.Vector.sub(attract, this.position);
      let dsq = force.magSq();
      dsq = constrain(dsq, 5, 50);
      let strength = G / dsq;
      force.setMag(strength);
      force.mult(-1);
      this.addForce(force);
    }
  }

  update() {
    // this.addForce(this.gravity);

    this.forces();

    this.velocity.add(this.acceleration);
    this.velocity.limit(2);
    this.position.add(this.velocity);

    this.position.x = (this.position.x + width) % width;
    this.position.y = (this.position.y + height) % height;

    fill(this.hue, 50, 100);
    noStroke();
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);

    let accDir = p5.Vector.normalize(this.acceleration);
    accDir.mult(this.diameter + 10);
    stroke(0);
    // line(this.position.x, this.position.y, this.position.x + accDir.x, this.position.y + accDir.y);

    this.acceleration.mult(0);
  }
}
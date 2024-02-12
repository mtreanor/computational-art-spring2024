let agents = [];
let gravity;

let attracter = {};

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  
  gravity = createVector(0, 0.1);

  for (let i = 0; i < 2; i++) {
    agents.push(new Agent(random(width), random(height)));
  }

  attracter.pos = createVector(width/2, height/2);
}

function draw() {
  background(0, 0, 100);

  attracter.pos.x = mouseX;
  attracter.pos.y = mouseY;

  for (let agent of agents) {
    agent.update();
    agent.show();

    // F = (G * m1 * m2) / d^2
    let g = .01;
    let vec = p5.Vector.sub(attracter.pos, agent.pos);
    let d = vec.mag();
    let f = g / d * d;
    agent.addForce(vec.mult(f));
  }

  fill(100, 100, 100);
  circle(attracter.pos.x, attracter.pos.y, 10);
}


let agents = [];
let gravity;

let target;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  
  gravity = createVector(0, 0.1);

  target = createVector(100, height/3);

  for (let i = 0; i < 20; i++) {
    agents.push(new Agent(random(width), random(height), target));
  }
}

function draw() {
  background(0, 0, 1001);

  for (let agent of agents) {
    agent.update();
    agent.show();
  }


  noStroke();
  fill(200, 100, 100, 0.2);
  circle(target.x, target.y, 200);
  fill(200, 100, 100);
  circle(target.x, target.y, 10);
}


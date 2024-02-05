let agents = [];
let gravity;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  
  gravity = createVector(0, 0.1);

  for (let i = 0; i < 1; i++) {
    agents.push(new Agent(width/2, height/2));
  }
}

function draw() {
  background(0, 0, 100);

  for (let agent of agents) {
    agent.update();
    agent.show();
  }
}


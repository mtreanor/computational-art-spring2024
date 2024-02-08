let agents = [];
let numAgents = 1000;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();
  
  let xoff = 0;
  let inc = 1;
  for (let i = 0; i < numAgents; i++) {
    let x = map(i, 0, numAgents, 0, width);
    let y = height/2;
    let vx = noise(xoff);
    let vy = noise(xoff);
    let agent = new Agent(x, y, vx, vy);
    agents.push(agent);

    xoff += inc;
  }
}

function draw() {
  background(0, 0, 100);

  push();
  translate(width/2, height/2);
  for (let i = 0; i < 2 * PI; i += 0.1) {
    let r = 200 + 50 * sin(frameCount * 0.01);
    let x = r * cos(i);
    let y = r * sin(i);
    fill(100, 100, 100);
    ellipse(x, y, 10, 10);
  }
  pop();

  for (let agent of agents) {
    agent.update();
    agent.show();
  }
}


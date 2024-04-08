let angles = [0, 0, 0, 0];
let rates = [0.01, 0.005, 0.009, 0.03];
let initialDiameter = 400;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  
  noStroke();
  fill(100,0.6);
  background(0, 0, 0);
}

function draw() {
  // background(0, 0, 100);

  let diameter = initialDiameter;

  push();
  translate(width/2, height/2);
  for (let i = 0; i < angles.length; i++) {
    diameter /= 2;
    // ellipse(0, 0, diameter);
    angles[i] += rates[i];
    let x = diameter/2 * cos(angles[i]);
    let y = diameter/2 * sin(angles[i]);
    translate(x, y);
    let w = map(i, 0, angles.length, 1, abs(sin(frameCount * 0.01) * 10));
    fill(map(i, 0, angles.length, i* 10, 200), 60, 100);
    ellipse(0, 0, w);
  }
  pop();
}


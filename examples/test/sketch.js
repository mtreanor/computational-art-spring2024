function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
}

function draw() {
  fill(frameCount*2 % 360, 100, 100);
  // fill(0);
  if (random() < 0.5) {
    ellipse(mouseX, mouseY, random(10, 40), 100);
  } else {
    ellipse(mouseX, mouseY, random(10, 40)); 
  }
}

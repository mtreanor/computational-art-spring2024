let angle;
let trunk;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);

  background(0, 0, 100);

  angle = 10;
  trunk = 50;

  noFill();

  circ(height/2, width/2, height/2, 0);
}
function circ(r, x, y) {
  ellipse(x, y, r*2);
  r *= 0.7;
  if (r > 3) {
    circ(r, x - r/2, y);
    circ(r, x + r/2, y);
  }
}

function draw() {
  background(0, 0, 100);

  angle = map(mouseX, 0, width, 0, 50);
  trunk = map(mouseY, height, 0, 0, 100, 10);

  push();
  translate(width/2, height);
  rotate(radians(-180));
  branch(trunk);
  pop();
}

function branch(l) {
  push();
  translate(0, l);
  line(0, 0, 0, -l);
  l *= 0.8;

  if (l > 5) {

    push();
    rotate(radians(-angle));
    branch(l);
    pop();

    push();
    rotate(radians(angle));
    branch(l);
    pop();
  }

  pop();
}


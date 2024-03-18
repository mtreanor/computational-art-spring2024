let dots = [];
let numDots = 30;

let restLength = 10;

let springs = [];

let gravitationalConstant = 0.00001;
let downwardGravity;
let wind;
let xoff = 0;
let yoff = 10;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  downwardGravity = createVector(0, 0.38);
  wind = createVector(-0.1, 0);

  // Create all the dots
  for (let i = 0; i < numDots; i++) {
    let x = width/2;
    let y = height - i * restLength;
    dots.push(new Dot(x, y, i + 1));
  }

  // Connect each pair of dots together with a spring
  for (let i = 1; i < dots.length; i++) {
    springs.push(new Spring(dots[i - 1], dots[i], restLength, -0.5));
  }

  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);//, 0.01);

  xoff += 0.01;
  yoff += 0.001;
  wind.x = map(noise(xoff), 0, 1, -0.05, 0.05);
  wind.y = map(noise(yoff), 0, 1, -0.3, -0.5);

  // Position the first dot where ever the mouse is. This allows will force the
  // springs to apply all sorts of forces to the dots.
  // if (mouseIsPressed) {
    dots[0].pos.x = width/2;
    dots[0].pos.y = height;
  // }

  // Update and draw all the dots
  for (let dot of dots) {
    dot.update();
    dot.show();
  }

  // Update all the springs (which will apply a bunch of forces to the dots)
  for (let spring of springs) {
    spring.update();
    spring.show();
  }

  // Draw "water". Inside the dot, we apply "drag" force if the dot is overlapping
  noStroke();
  fill(360 * .6, 60, 100, 0.3);
  rect(0, height / 2, width, height / 2);
}


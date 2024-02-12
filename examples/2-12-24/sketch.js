let dots = [];
let numDots = 40;

let gravitationalConstant = 0.00001;
let downwardGravity;
let wind;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  downwardGravity = createVector(0, 0.38);
  wind = createVector(-0.1, 0);
  
  // Create all the dots
  for (let i = 0; i < numDots; i++) {
    let x = map(i, 0, numDots, 0, width);
    let y = random(height);
    dots.push(new Dot(x, y, i+1));
  }

  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100, 0.1);

  // Update and draw all the dots
  for (let dot of dots) {
    dot.update();
    dot.show();
  }
}


let dots = [];
let springs = [];
let numDots = 4;

let gravitationalConstant = 0.00001;
let downwardGravity;
let wind;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  downwardGravity = createVector(0, 1.98);
  wind = createVector(-0.1, 0);
  
  // Create all the dots
  for (let i = 0; i < numDots; i++) {
    let x = width/2 + random(-100, 100);
    let y = map(i, 0, numDots, 0, height);
    dots.push(new Dot(x, y, i+1));

    if (i > 0) {
      springs.push(new Spring(dots[i-1], dots[i]));
    }
  }
  dots[0].locked = true;

  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);

  dots[0].pos.x = mouseX;
  dots[0].pos.y = mouseY;

  for (let spring of springs) {
    spring.update();
    spring.show();
  }


  // Update and draw all the dots
  for (let dot of dots) {
    dot.update();
    dot.show();
  }

  noStroke();
  fill(200, 70, 100, 0.4);
  rect(0, height/2, width, height/2);
}


let dots = [];
let downwardGravity;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);

  downwardGravity = createVector(0, 0.1);
  
  dots.push(new Dot(50, height/2));
}

function draw() {
  background(0, 0, 100);

  if (mouseIsPressed) {
    dots[0].active = true;
    dots[0].vel.x = 5;
    dots[0].vel.y = -5;
  }

  for (let dot of dots) {
    dot.update();
    dot.show();
  }

}


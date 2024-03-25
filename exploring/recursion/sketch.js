let amount = 4;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  
  background(0, 0, 100);
  noFill();
  // thing(width/4, width - width/4, height/4);
  

  push();
  translate(width/2, height);
  // rotate(radians(90));
  branch(100);
  pop();
}

function draw() {
  // background(0, 0, 100);

  // pattern(width/2, height/2, noise(frameCount * 0.01) * 5000);
}

function constructTree(x, y, len, angle) {
  let b = new Branch(x, y, 100, 0);
  
}

function branch(l) {
  line(0, 0, 0, -l);
  translate(0, -l);
  l *= 0.5;
  if (l > 5) {
    push();
    rotate(radians(-15));
    branch(l);
    pop();

    push();
    rotate(radians(15));
    branch(l);
    pop();
  }
}


function pattern(x, y, r) {
  circle(x, y, r);
  if (r > 10) {
    stroke(map(r, 0, 400, 0, 360), 50, 100);

    pattern(x, y, r /2);
    pattern(x - r/2, y, r /2);
    pattern(x + r/2, y, r /2);
    pattern(x, y+ r/2, r /2);
    pattern(x, y- r/2, r /2);
  }
}

function thing(x1, x2, y) {
  line(x1,y,x2,y);

  if (x2 - x1 > 1) {
    thing(x1, x1 + (x2 - x1) / 3, y+20);
    thing(x1 + 2 * (x2 - x1) / 3, x2, y+20);
  }
}


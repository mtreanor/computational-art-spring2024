let count = 0;
let branchRand;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  
  // noFill();
  // drawCircle(width/2, height/2, 400);
  // console.log(count);

  background(0, 0, 100);

  branchRand = random();
  

}

function branch(l) {
  count++;

  strokeWeight(1 + count * 0.08);
  line(0,0,0,-l);

  translate(0, -l);

  l = l * 0.6;

  if (l > 5) {
    push();
    rotate(radians(-45 + map(noise(frameCount * 0.01), 0, 1, -2, 2)));
    branch(l);
    pop();

    push();
    rotate(radians(45 + map(noise(frameCount + 100) * 0.01, 0, 1, -2, 2)));
    branch(l);
    pop();
  } else {
    // fill(random(360), 60, 100);
    // noStroke();
    ellipse(0, 0, 50);
  }
}

function draw() {
  background(0, 0, 100);

  count = 0;
  translate(width/2, height);
  branch(150);
}


function drawCircle(x, y, w) {

  stroke(map(count, 0, 100000, 0, 360), 60, 100); 
  ellipse(x, y, w);

  count++;

  if (w > 5) {
    drawCircle(x, y, w/2);
    drawCircle(x-50, y, w/2);
    drawCircle(x+50, y, w/2);
    drawCircle(x, y+50, w/2);
    drawCircle(x, y-50, w/2);
  }
}
// let catImg;

// let points = [];

let x = 0;
let xoff = 0;

function preload() {
  // catImg = loadImage("cat.png");
}

function setup() {
  createCanvas(600, 400);
  colorMode(HSB); // 360: hue, 100: sat, 100: brightness, 1: alpha
  
  x = width/2;

  // for (let i = 0; i < 10; i++) {
    // let p = createVector(random(width), random(height));
  //   points.push(p);
  // }
}

function draw() {
  background(0, 0, 100);

  x += map(noise(xoff), 0, 1, -2, 2);
  xoff += 0.01;

  fill(310, 100, 100, 0.5);
  ellipse(x, height/2, 50, 50);

  // fill(360, 100, 100);
  // noStroke();
  // rect(width/2, height/2, 100, 100);

  // stroke(0, 0, 0, 1);
  // strokeWeight(10);
  // fill(300, 100, 100, 0.5);
  // ellipse(mouseX, mouseY, 100, 100);

  // line(mouseX, mouseY, width/2, height/2);
  // fill(300, 100, 100, 0.5);
  // beginShape();
  // for (let p of points) { // for (int i = 0; i < points.length; i++)
  //   vertex(p.x, p.y);
  // }
  // endShape();
}


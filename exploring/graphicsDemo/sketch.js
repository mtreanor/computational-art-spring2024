let buffer;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  
  buffer = createGraphics(width, height);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    buffer.ellipse(x, y, 100);
  }

  imageMode(CENTER);

}

function draw() {
  background(0, 0, 100);

  translate(width/2, height/2);
  scale(sin(frameCount * 0.1));
  rotate(frameCount * 0.001);
  image(buffer, 0, 0);
}


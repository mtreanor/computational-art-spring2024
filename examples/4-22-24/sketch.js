let img;
let imgWidth = 40;
let imgHeight = 28;

let pixelDimension;

// function preload() {
   // img = loadImage("./frog.png"); // 20 by 14
// }

function setup() {
  createCanvas(600, 400);
  
  img = createCapture(VIDEO);
  img.size(imgWidth, imgHeight);
  img.hide();

  pixelDimension = height / imgHeight;

  pixelDensity(1);
  background(0, 0, 0);
}

function draw() {
  background(0, 0, 0);

  img.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      let a = img.pixels[index+3];

      let avg = (r+g+b) / 3;
      let alpha = 255;
      // if (avg > 120) {
      //   alpha = 0;
      // }

      fill(r, g, b, alpha);
      let offsetX = map(x, 0, 20, 0, 2 * PI);
      let xPos = x*pixelDimension + cos(offsetX + frameCount * 0.1) * 2
      let offsetY = map(y, 0, 14, 0, 2 * PI);
      let yPos = y*pixelDimension + sin(offsetY + frameCount * 0.1) * 2
      ellipse(xPos, yPos, pixelDimension);
    }
  }
}


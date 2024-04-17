let mic, fft, capture;

function setup() {
  createCanvas(710, 400);
  noFill();
  colorMode(HSB);

  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(.95, 16);
  fft.setInput(mic);

  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100, 0.05);

  let spectrum = fft.analyze(16);

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let y = height - map(spectrum[i], 0, 255, height, 0);
    rect(x, y, width/spectrum.length, height - spectrum[i]);
  }
  endShape();


  capture.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  // let stepSize = 50;
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - capture.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      let s = spectrum[floor(map(x, 0, width, 0, spectrum.length))];
      let h = map(s, 0, 100, 0, 360);
      fill(h, 50, 100);
      // if (radius < 30)
      ellipse(x, y, radius, radius);
    }
  }
}

function mousePressed() {
  userStartAudio();
}














// let g;

// function setup() {
//   createCanvas(700, 500);
//   colorMode(HSB);
//   imageMode(CENTER);
  
//   g = createGraphics(200, 200);
//   g.colorMode(HSB);
//   // g.beginShape();
//   for (let i = 0; i < 10; i++) {
//     let r = g.width/2;
//     g.push();
//     g.translate(g.width/2, g.height/2);
//     let theta1 = random(2*PI);
//     let x1 = r * cos(theta1);
//     let y1 = r * sin(theta1);
//     let theta2 = random(2*PI);
//     let x2 = r * cos(theta2);
//     let y2 = r * sin(theta2);
//     g.fill(random(360), 60, 100, 0.9);
//     g.stroke(random(360), 60, 100, 0.9);
//     g.line(x1,y1,x2,y2);
//     // g.vertex(x1,y1);
//     // g.vertex(x2,y2);
//     g.pop();
//   }
//   // g.endShape(CLOSE);
//   background(0, 0, 100);
// }

// function draw() {
//   background(0, 0, 100, .01);

//   push();
//   translate(mouseX, mouseY);
//   rotate(frameCount * 0.01);
//   image(g, 0, 0);
//   pop();
// }